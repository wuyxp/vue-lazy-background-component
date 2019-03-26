import {Vue, Component, Prop} from 'vue-property-decorator'
import { replaceMiniSrc, replaceWebpSrc, isSupportWebp, loadImg } from './utils'
import style from './style.less'

@Component
class LazyBackground extends Vue {
  @Prop({
    type: String,
    required: true
  })
  public src;

  @Prop({
    type: [Boolean, Object],
    required: false,
    default: () => ({
      src: (src: string): string => replaceMiniSrc(src)
    })
  })
  public miniOptions;

  @Prop({
    type: [Boolean, Object],
    required: false,
    default: () => ({
      src: src => replaceWebpSrc(src)
    })
  })
  public webpOptions;

  @Prop({
    type: Object,
    required: false,
    default: () => ({})
  })
  public cssStyle;

  @Prop({
    type: [String, Array],
    required: false,
    default: () => ([])
  })
  public className;

  public originClassName = [style.container].concat(this.className)

  public maskStyle = { }
  public originStyle = Object.assign({}, this.cssStyle)


  public maskShow: boolean = true
  public miniSrc: string = ''
  public webpSrc: string = ''

  // 为originStyle设置样式
  public setOriginSrc(src = '') {
    const originStyle = {
      backgroundImage: `url(${src})`
    }
    this.originStyle = Object.assign({}, this.cssStyle, originStyle)
  }

  // 为maskStyle设置样式
  public setMaskSrc(src = '') {
    const maskStyle = {
      backgroundImage: `url(${src})`
    }
    this.maskStyle = Object.assign({}, this.cssStyle, maskStyle)
  }

  // 将初始路径生成对应的miniSrc和webpSrc，如果有空值，则默认不使用该图片
  public initVar(path) {
    if (this.miniOptions) {
      const { src: createMiniSrc } = this.miniOptions
      this.miniSrc = typeof createMiniSrc === 'function' ? createMiniSrc(path) : ''
    }
    if (this.webpOptions) {
      const { src: createWebpSrc } = this.webpOptions
      this.webpSrc = typeof createWebpSrc === 'function' ? createWebpSrc(path) : ''
    }
  }
  // 加载webp格式图片，这里需要判断浏览器是否支持webp格式，对webp格式图片的错误处理
  public loadWebpPic() {
    // 不支持直接加载原图
    if (isSupportWebp()) {
      loadImg(this.webpSrc, image => {
        this.setOriginSrc(image.src)
        this.maskShow = false
      }, this.loadOriginPic)
    } else {
      this.loadOriginPic()
    }
  }

  // 加载原图
  public loadOriginPic() {
    loadImg(this.src, image => {
      this.setOriginSrc(image.src)
      this.maskShow = false
    })
  }
  public initLoadPic() {
    if (this.miniSrc) {
      loadImg(this.miniSrc, image => {
        this.setMaskSrc(image.src)
        this.loadWebpPic()
      }, this.loadWebpPic)
    } else {
      this.loadWebpPic()
    }
  }
  public mounted() {
    this.initVar(this.src)
    this.initLoadPic()
  }
  public render(h) {
    return (
      <div class={this.originClassName.join(' ')} style={this.originStyle}>
        { this.$slots.default }
        {
          this.maskShow ?
          <div
            class={style.containerMask}
            style={this.maskStyle}
          /> : null
        }
      </div>
    )
  }
}

export default LazyBackground
