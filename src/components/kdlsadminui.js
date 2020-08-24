import cAvatar from './avatar/index.vue'

const componentList = [
  cAvatar,
]

const kdlsadminui = {
  install: function (Vue) {
    componentList.forEach((item) => {
      Vue.component(item.name, item)
    })
  },
}

export default kdlsadminui;
