import LazyBackground from './LazyBackground'
LazyBackground.install = Vue => Vue.component(LazyBackground.componentName, LazyBackground);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(LazyBackground);
}

export default LazyBackground
