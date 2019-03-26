import LazyBackground from './package/index';

const components = [
  LazyBackground,
]

const install = (Vue, opts = {}) => {
  components.map(component => {
    Vue.component(component.componentName, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  LazyBackground,
}
