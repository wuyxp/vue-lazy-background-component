import {Vue, Component, Prop} from 'vue-property-decorator'
import { loadMiniPic, loadOriginPic, loadWebpPic } from './utils'
import style from './style.less'

@Component
class LazyBackground extends Vue {
  @Prop({
    type: String,
    required: true
  })
  public src;

  public maskStyle = {
    backgroundImage: `url(${this.src})`
  }


  public maskShow: boolean = true
  public mounted() {
    loadMiniPic(this.src)
  }
  public render(h) {
    return (
      <div class={style.container}>
        { this.$slots.default }
        <div
          class={style.containerMask}
          style={this.maskStyle}
        ></div>
      </div>
    )
  }
}

export default LazyBackground
