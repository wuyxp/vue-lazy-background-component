import Vue from 'vue'
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    src?: string,
    style?: object
  }
}
declare var require: any