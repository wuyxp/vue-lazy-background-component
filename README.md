# vue-lazy-background-component
提供一个可以对背景图片延迟加载，并且动态选择加载更合适（webp）格式的图片。

## 功能
本组件提供了，代替使用背景图片的div，可以对背景图片进行懒加载处理，具体步骤是
1. 先根据传入图片的路径，计算出对应的小图和webp图片
2. 先加载小图
3. 判断浏览器是否支持webp
4. 根据上面的判断展示对应的图片

## 配置
下载包与安装
```
npm install vue-lazy-background-component --save

或者

syarn add @belllabs/vue-lazy-background-component --save

...main.js

import LazyBackground from 'vue-lazy-background-component'
Vue.use(LazyBackground)

```
上面即可安装完毕

## 使用
普通vue项目使用
```
<LazyBackground
  class="test"
  :src = "require('./images/logo.jpg')"
>
  测试地址11123
</LazyBackground>
```

tsx 项目使用(本项目使用tsx完成)
```
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
```

## 配置说明
```
cssStyle //接受一个style对象，添加到外层的div上
className // 接受一个字符串或者数组，添加到外层的div上
src // 默认图片路径
miniOptions // 配置小图路径，默认接受一个含有src的对象，src是一个函数，接受处理过的url地址，默认小图的名称是原图后加 -min
webpOptions // 和上面一样，默认webp的图片名称是将后缀修改为 .webp
上面两个参数，如果不需要则直接设置成false，这样组件就不会加载对应图片，防止404出现

```

> 注意src参数：如果是本地图片则使用require，因为要触发url-loader或者file-loader。如果是绝对路径或者cdn则直接赋值，但是确保对应目录上有小图和webp图片

重要：
组件所需要的图片，全部本应该都是根据原图自动生成出来，当然如果设计同学提供更好，如果不提供，那么还好npm上有另外一个插件，可以生成和这个组件名字和功能特别匹配的webpack-plugin

https://www.npmjs.com/package/webpack-plugin-image-transform-webp-and-mini

对于这两个插件如有任何疑问
欢迎提一些issue
我的QQ：956826374