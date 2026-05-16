const { FOOD_DATABASE, getConstitutionById } = require('../../common/data')

Page({
  data: {
    search: '',
    filter: '全部',
    filters: ['全部', '宜食', '慎食', '收藏'],
    propertyFilter: '',
    properties: ['全部', '寒', '热', '温', '凉', '平'],
    meridianFilter: '',
    meridians: ['全部', '心', '肝', '脾', '肺', '肾', '胃', '大肠', '小肠', '膀胱'],
    foods: [],
    filtered: [],
    expanded: {},
    currentConstitution: null,
    hasData: false
  },
  onLoad() {
    const app = getApp()
    const result = app.globalData.currentResult
    const c = result ? getConstitutionById(result.id) : null
    const favs = this.getFavorites()
    const hasData = FOOD_DATABASE && FOOD_DATABASE.length > 0
    let foods = []
    if (hasData) {
      foods = FOOD_DATABASE.map(f => {
        let suit = ''
        if (c) {
          if (c.suitable.includes(f.name)) suit = '宜食'
          else if (c.avoid.includes(f.name)) suit = '慎食'
        }
        return { ...f, favorite: favs.foods.includes(f.id), suit }
      })
    }
    this.setData({ foods, filtered: foods, currentConstitution: c, hasData })
  },
  getFavorites() {
    try { return wx.getStorageSync('favorites') || { foods: [], recipes: [] } }
    catch (e) { return { foods: [], recipes: [] } }
  },
  saveFavorites(favs) {
    wx.setStorageSync('favorites', favs)
  },
  onSearch(e) {
    this.setData({ search: e.detail.value }, this.doFilter)
  },
  setFilter(e) {
    this.setData({ filter: e.currentTarget.dataset.value, propertyFilter: '', meridianFilter: '' }, this.doFilter)
  },
  setProperty(e) {
    this.setData({ propertyFilter: e.currentTarget.dataset.value }, this.doFilter)
  },
  setMeridian(e) {
    this.setData({ meridianFilter: e.currentTarget.dataset.value }, this.doFilter)
  },
  doFilter() {
    const { foods, search, filter, propertyFilter, meridianFilter, currentConstitution } = this.data
    let f = [...foods]
    if (search) f = f.filter(item => item.name.includes(search))
    if (filter === '宜食' && currentConstitution) {
      f = f.filter(item => currentConstitution.suitable.includes(item.name))
    } else if (filter === '慎食' && currentConstitution) {
      f = f.filter(item => currentConstitution.avoid.includes(item.name))
    } else if (filter === '收藏') {
      f = f.filter(item => item.favorite)
    }
    if (propertyFilter) f = f.filter(item => item.property === propertyFilter)
    if (meridianFilter) f = f.filter(item => item.meridian && item.meridian.includes(meridianFilter))
    this.setData({ filtered: f, expanded: {} })
  },
  toggleCard(e) {
    const id = e.currentTarget.dataset.id
    this.setData({ ['expanded.' + id]: !this.data.expanded[id] })
  },
  toggleFavorite(e) {
    const id = e.currentTarget.dataset.id
    const { foods, filtered } = this.data
    const favs = this.getFavorites()
    const idx = favs.foods.indexOf(id)
    if (idx > -1) favs.foods.splice(idx, 1)
    else favs.foods.push(id)
    this.saveFavorites(favs)
    const toggle = arr => arr.map(f => f.id === id ? { ...f, favorite: !f.favorite } : f)
    this.setData({ foods: toggle(foods), filtered: toggle(filtered) })
  }
})
