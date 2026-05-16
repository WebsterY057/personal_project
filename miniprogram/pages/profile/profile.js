const app = getApp()
const { CONSTITUTIONS, getConstitutionById } = require('../../common/data_full')

Page({
  data: {
    userBody: null,
    constitution: null,
    theme: 'dark',
    menuItems: [
      { icon: '🌱', text: '时令养生', action: 'navigate', url: '/pages/season/season' },
      { icon: '🏃', text: '运动营养', action: 'navigate', url: '/pages/workout/workout' },
      { icon: '📜', text: '中药故事', action: 'navigate', url: '/pages/stories/stories' },
      { icon: '🎨', text: '主题切换', action: 'theme' },
      { icon: '🗑️', text: '重置身体数据', action: 'reset' },
      { icon: '⭐', text: '收藏列表', action: 'favorites' }
    ],
    favoritesExpanded: false,
    favoriteFoods: [],
    favoriteRecipes: []
  },
  onLoad() {
    this.loadData()
    this.loadFavorites()
  },
  onShow() {
    this.loadData()
    this.loadFavorites()
  },
  loadData() {
    const body = app.globalData.userBodyInfo || wx.getStorageSync('bodyInfo')
    const cr = app.globalData.currentResult
    let con = null
    if (cr) con = getConstitutionById(cr.id)
    this.setData({ userBody: body, constitution: con, theme: app.getTheme() })
  },
  loadFavorites() {
    try {
      const f = wx.getStorageSync('favorites') || []
      const foods = f.filter(i => i.type === 'food').map(i => i.name)
      const recipes = f.filter(i => i.type === 'recipe').map(i => i.name)
      this.setData({ favoriteFoods: foods, favoriteRecipes: recipes })
    } catch (e) { this.setData({ favoriteFoods: [], favoriteRecipes: [] }) }
  },
  handleMenu(e) {
    const action = e.currentTarget.dataset.action
    if (action === 'navigate') wx.navigateTo({ url: e.currentTarget.dataset.url })
    else if (action === 'theme') this.toggleTheme()
    else if (action === 'reset') this.resetBodyData()
    else if (action === 'favorites') this.toggleFavorites()
  },
  toggleTheme() {
    const t = this.data.theme === 'dark' ? 'light' : 'dark'
    app.setTheme(t)
    this.setData({ theme: t })
    wx.showToast({ title: t === 'dark' ? '深色模式' : '浅色模式', icon: 'none' })
  },
  resetBodyData() {
    wx.showModal({
      title: '确认重置',
      content: '将清除身体数据和测评结果，确定继续？',
      success: (r) => {
        if (r.confirm) {
          wx.removeStorageSync('bodyInfo')
          wx.removeStorageSync('appState')
          app.globalData.userBodyInfo = null
          app.globalData.currentResult = null
          app.globalData.currentConstitutionId = null
          this.setData({ userBody: null, constitution: null })
          wx.showToast({ title: '已重置', icon: 'success' })
        }
      }
    })
  },
  toggleFavorites() {
    this.setData({ favoritesExpanded: !this.data.favoritesExpanded })
  },
  goHome() { wx.switchTab({ url: '/pages/home/home' }) }
})
