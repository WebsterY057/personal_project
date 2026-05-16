const { RECIPES, CONSTITUTIONS } = require('../../common/data_full')

Page({
  data: {
    search: '',
    filter: '全部',
    constitutions: ['全部', ...CONSTITUTIONS.map(c => c.name)],
    recipes: [],
    filtered: [],
    hasData: false,
    showDetail: false,
    currentRecipe: null
  },
  onLoad() {
    const hasData = RECIPES && Object.keys(RECIPES).length > 0
    const favs = this.getFavorites()
    let recipes = []
    if (hasData) {
      recipes = Object.entries(RECIPES).map(([key, r]) => ({
        ...r,
        key,
        favorite: favs.recipes.includes(key)
      }))
    }
    this.setData({ recipes, filtered: recipes, hasData })
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
    this.setData({ filter: e.currentTarget.dataset.value }, this.doFilter)
  },
  doFilter() {
    const { recipes, search, filter } = this.data
    let f = [...recipes]
    if (search) f = f.filter(r => r.name.includes(search))
    if (filter !== '全部') f = f.filter(r => r.constitutions && r.constitutions.includes(filter))
    this.setData({ filtered: f })
  },
  showRecipe(e) {
    const key = e.currentTarget.dataset.key
    const r = this.data.recipes.find(r => r.key === key)
    this.setData({ showDetail: true, currentRecipe: r })
  },
  closeModal() {
    this.setData({ showDetail: false, currentRecipe: null })
  },
  noop() {},
  copyList() {
    const r = this.data.currentRecipe
    if (!r || !r.ingredients) return
    wx.setClipboardData({ data: r.ingredients.join('\n'), success: () => wx.showToast({ title: '已复制购物清单' }) })
  },
  toggleFavorite(e) {
    const key = e.currentTarget.dataset.key
    const { recipes, filtered } = this.data
    const favs = this.getFavorites()
    const idx = favs.recipes.indexOf(key)
    if (idx > -1) favs.recipes.splice(idx, 1)
    else favs.recipes.push(key)
    this.saveFavorites(favs)
    const toggle = arr => arr.map(r => r.key === key ? { ...r, favorite: !r.favorite } : r)
    this.setData({ recipes: toggle(recipes), filtered: toggle(filtered) })
  }
})
