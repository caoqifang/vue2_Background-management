<template>
  <div class="not">
    <div>点击<router-link to='/'>这里</router-link>进入首页</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.not {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(../assets/images/404.png) center no-repeat;
  background-size: 100%;
  >div:nth-child(1){
    margin: 550px auto;
    font-size: 20px;
    font-weight: 600;
    a{
        color: yellow;
        text-decoration: none;
    }
  }
}
</style>