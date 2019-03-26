import { Vue, Component } from 'vue-property-decorator'
import LazyBackground from './package/LazyBackground'
import appStyle from './app.less'

const style = {
  container: {
    width: '480px',
    height: '300px',
    backgroundSize: '100% 100%',
    display: 'inline-block',
    margin: '10px'
  }
}
@Component
class Home extends Vue {
  public name: string = '测试我的组件是否好使呢'
  public render(h) {
    return (
      <div>
        <h1>
          {this.name}
        </h1>
        <LazyBackground
          cssStyle={style.container}
          className={appStyle.box}
          src={require('./assets/bg.jpg')}
        >
          使用全部功能的组件
        </LazyBackground>
        <LazyBackground
          cssStyle={style.container}
          className={[appStyle.box]}
          miniOptions={false}
          src={require('./assets/bg.jpg')}
        >
          不需要加载小图的组
        </LazyBackground>
        <LazyBackground
          cssStyle={style.container}
          webpOptions={false}
          src={require('./assets/bg.jpg')}
        >
          不需要加载webp的组件
        </LazyBackground>
        <LazyBackground
          cssStyle={style.container}
          miniOptions={{
            src: src => src
          }}
          webpOptions={{
            src: src => src
          }}
          src={require('./assets/bg.jpg')}
        >
          分别设置小图和webp图片的路径
        </LazyBackground>
      </div>
    )
  }
}
export default Home
