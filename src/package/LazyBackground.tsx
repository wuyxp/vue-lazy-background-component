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


  public maskShow: boolean = true
  public mounted() {
    loadMiniPic(this.src)
  }
  public render(h) {
    return (
      <div class={style.container}>
        { this.$slots.default }
        <transition name='___fade'>
          <div
            class={style.containerMask}
            style='maskStyle'
          ></div>
        </transition>
      </div>
    )
  }
}

export default LazyBackground
