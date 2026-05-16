const { HERB_STORIES } = require('../../common/data_full')

Page({
  data: {
    stories: [],
    current: null
  },
  onLoad() {
    this.setData({ stories: HERB_STORIES })
  },
  showStory(e) {
    const id = e.currentTarget.dataset.id
    const story = HERB_STORIES.find(s => s.id === id)
    this.setData({ current: story })
  },
  closeDetail() {
    this.setData({ current: null })
  }
})
