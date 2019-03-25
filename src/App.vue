<template>
  <div>
    App
    <p :class="$style.test">testt</p>
    <Home />
  </div>
</template>
<script>
import Home from './Home'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
<style lang="less" module>
.test {
  color: yellow
}
</style>


