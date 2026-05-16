const app = getApp()
const { getConstitutionById } = require('../../common/data')

const SEASONS = [
  {
    key: 'spring', name: '春', label: '春季',
    color: '#4CAF50', emoji: '🌸',
    principle: '春生——养肝护阳',
    tip: '夜卧早起，广步于庭。宜食辛甘发散之品，少食酸收之味。',
    recipe: { name: '韭菜炒核桃', ingredients: ['韭菜', '核桃仁', '枸杞', '生姜'], effect: '助阳升发，疏肝理气', detail: '韭菜辛温助阳，核桃补肾强腰，枸杞养肝明目。适合春季升发阳气。' },
    foods: ['韭菜', '香椿', '菠菜', '豆芽', '荠菜', '春笋', '葱', '蒜', '香菜', '红枣', '枸杞', '山药']
  },
  {
    key: 'summer', name: '夏', label: '夏季',
    color: '#FF5722', emoji: '☀️',
    principle: '夏长——养心安神',
    tip: '夜卧早起，无厌于日。宜清热解暑，健脾祛湿。',
    recipe: { name: '绿豆薏米汤', ingredients: ['绿豆', '薏米', '百合', '冰糖'], effect: '清热解暑，利湿安神', detail: '绿豆清热解毒，薏米健脾祛湿，百合养阴安神。夏日消暑佳品。' },
    foods: ['绿豆', '冬瓜', '苦瓜', '黄瓜', '西瓜', '荷叶', '莲子', '百合', '薏米', '赤小豆', '薄荷', '莲藕']
  },
  {
    key: 'autumn', name: '秋', label: '秋季',
    color: '#FF9800', emoji: '🍂',
    principle: '秋收——养肺润燥',
    tip: '早卧早起，与鸡俱兴。宜滋阴润燥，少食辛辣。',
    recipe: { name: '银耳雪梨羹', ingredients: ['银耳', '雪梨', '枸杞', '冰糖'], effect: '滋阴润肺，生津止渴', detail: '银耳滋阴润燥，雪梨清热化痰，枸杞养肝明目。秋季防燥养肺首选。' },
    foods: ['银耳', '雪梨', '百合', '莲藕', '荸荠', '山药', '白萝卜', '蜂蜜', '黑芝麻', '核桃', '石榴', '柿子']
  },
  {
    key: 'winter', name: '冬', label: '冬季',
    color: '#2196F3', emoji: '❄️',
    principle: '冬藏——补肾温阳',
    tip: '早卧晚起，必待日光。宜温补阳气，避寒就温。',
    recipe: { name: '当归生姜羊肉汤', ingredients: ['羊肉', '当归', '生姜', '红枣', '枸杞'], effect: '温阳散寒，补血益气', detail: '羊肉温补阳气，当归补血活血，生姜散寒温中。冬季温补第一方。' },
    foods: ['羊肉', '牛肉', '韭菜', '生姜', '桂圆', '核桃', '板栗', '红枣', '山药', '南瓜', '香菇', '香菜']
  }
]

Page({
  data: { seasons: SEASONS, activeSeason: 0, constitution: null },
  onLoad() {
    this.initSeason()
    this.loadConstitution()
  },
  onShow() { this.loadConstitution() },
  initSeason() {
    const m = new Date().getMonth()
    const idx = m < 3 ? 0 : m < 6 ? 1 : m < 9 ? 2 : 3
    this.setData({ activeSeason: idx })
  },
  loadConstitution() {
    const cr = app.globalData.currentResult
    if (cr) {
      const c = getConstitutionById(cr.id)
      if (c) this.setData({ constitution: c })
    }
  },
  switchSeason(e) {
    this.setData({ activeSeason: Number(e.currentTarget.dataset.index) })
  },
  copyList(e) {
    const items = e.currentTarget.dataset.items || []
    wx.setClipboardData({ data: items.join('、'), success: () => wx.showToast({ title: '已复制购物清单', icon: 'success' }) })
  }
})
