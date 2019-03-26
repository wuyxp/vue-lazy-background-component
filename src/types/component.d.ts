import Vue from 'vue'
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    src?: string,
    cssStyle?: object,
    miniOptions?: any,
    webpOptions?: any,
    className?: any
  }
}
declare var require: any