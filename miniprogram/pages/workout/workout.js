const app = getApp()
const { getConstitutionById } = require('../../common/data')

const WORKOUTS = [
  {
    type: '增肌', emoji: '💪', color: '#FF5722',
    tip: '增肌需要力量训练+高蛋白饮食+充足恢复。',
    detail: '建议大重量低次数训练（每组8-12RM），每周4-5次。重点训练复合动作：深蹲、硬拉、卧推、划船。',
    foods: ['鸡胸肉', '牛肉', '鸡蛋', '三文鱼', '牛奶', '豆腐', '藜麦', '西兰花', '香蕉', '燕麦', '花生酱', '红薯'],
    principle: '高蛋白、适量碳水、低脂。训练后30分钟补充蛋白质效果最佳。'
  },
  {
    type: '减脂', emoji: '🏃', color: '#4CAF50',
    tip: '减脂核心是热量缺口，七分吃三分练。',
    detail: '推荐中高强度间歇训练（HIIT）+ 稳态有氧。每周5次，每次40-60分钟。HIIT：20秒冲刺+40秒慢跑，重复8轮。',
    foods: ['鸡胸肉', '虾仁', '蛋白粉', '西兰花', '菠菜', '番茄', '黄瓜', '燕麦', '藜麦', '蓝莓', '牛油果', '魔芋'],
    principle: '高蛋白、高纤维、中低碳水。控制总热量在TDEE-300~500。晚餐减少碳水。'
  },
  {
    type: '耐力', emoji: '🚴', color: '#2196F3',
    tip: '耐力训练提升心肺功能和肌肉耐力。',
    detail: '长距离低强度有氧为主（LSD），配合乳酸阈值训练。每周3-4次，每次45-90分钟，心率控制在最大心率的60-75%。',
    foods: ['全麦面包', '燕麦', '香蕉', '红薯', '鸡蛋', '牛奶', '鸡胸肉', '杏仁', '奇亚籽', '运动饮料', '甜菜根', '樱桃'],
    principle: '高碳水、适量蛋白、低脂。运动前2小时补充复合碳水，运动中补充电解质。'
  }
]

Page({
  data: { workouts: WORKOUTS, constitution: null, hasConstitution: false },
  onLoad() {
    this.loadConstitution()
  },
  onShow() { this.loadConstitution() },
  loadConstitution() {
    const cr = app.globalData.currentResult
    if (cr) {
      const c = getConstitutionById(cr.id)
      if (c) {
        this.setData({ constitution: c, hasConstitution: true })
        return
      }
    }
    this.setData({ constitution: null, hasConstitution: false })
  }
})
