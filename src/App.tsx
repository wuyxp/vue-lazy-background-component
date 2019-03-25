import { Vue, Component } from 'vue-property-decorator'
import LazyBackground from './package/LazyBackground'

@Component
class Home extends Vue {
  public name: string = '测试我的组件是否好使呢'
  public render(h) {
    return (
      <div>
        <h1>
          {this.name}
        </h1>
        <LazyBackground>
          这里使用了LazyBackground组件
        </LazyBackground>
      </div>
    )
  }
}
export default Home
