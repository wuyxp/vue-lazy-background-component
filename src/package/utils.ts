/**
 * 判断浏览器是否支持webp格式
 * @returns Boolean
 */
export const isSupportWebp: () => boolean = () => !![].map && (typeof window !== 'undefined') && window.document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0

/**
 * 将普通图片的路径修改为后缀为 -min
 * @param src String
 * @returns src
 */
export const replaceMiniSrc: (src: string) => string = src => src.replace(/\.(\w+?)(\?[\s\S]+)?$/, '-min.$1$2')

/**
 * 将普通图片的路径修改为.webp格式
 * @param src String
 * @returns src
 */
export const replaceWebpSrc: (src: string) => string = src => src.replace(/(?:\.\w+)(\?|$)/, '.webp$1')

/**
 * 加载一张图片并且对对应的成功或者失败进行回调
 * @param src 传入需要加载的图片路径
 * @param callback 成功的回调函数
 * @param errorCallback 失败的回调函数
 */
export const loadImg = (src: string, callback: (image: HTMLImageElement) => void, errorCallback?: () => void): void => {
  const image = new Image()
  image.onload = function() {
    callback.call(this, image)
  }
  image.onerror = () => {
    if (typeof errorCallback === 'function') {
      errorCallback()
    }
  }
  image.src = src
}
