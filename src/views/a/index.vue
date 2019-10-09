<template>
  <div class="center">
    <div>page A</div>
    <br><hr><br>
    <div>\{{ device }}</div>
    <div>
      <div class="inline-block">left</div>
      <div class="inline-block">right</div>
    </div>
    <div class="header">
      这是头部
    </div>
    <div class="moveAction"> </div>
    <div class="triangle"></div>
    <div class="box">
      <div class="float-right clearfix">
        float-right
      </div>
      <div class="clearfix">22eee</div>
      <div class="clearfix">33</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'device'
    ])
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import "~styles/variables.scss";
@import '~styles/config.scss';
@import '~styles/mixin.scss';
// 参考资料: https://www.cnblogs.com/danghuijian/p/6097119.html
.center {
  width:600px;
  height: 100vh;
  @include center-block;
  background-color: $bg-color;
}
.inline-block{
  @include inline-block;
}
@media screen and (min-width: 780px) and (max-width: 1920px) {
  .header {
    color: red;
  }
}
.moveAction {
  width:100px;
  height:100px;
  background:red;
  position:relative;
  animation:mymove 5s infinite;
  -moz-animation:mymove 5s infinite; /* Firefox */
  -webkit-animation:mymove 5s infinite; /* Safari and Chrome */
  -o-animation:mymove 5s infinite; /* Opera */
}
@include keyframes(mymove){
  from {
    top:0px;
  }
  to {
    top:200px;
  }
}

.triangle {
  @include triangle(left, 20px, red);
}

.box{
  width: 600px;
  height: 200px;
  // border-radius: 50% 0;
  @include box-shadow(0 0 5px rgba(0,0,0,.3));
  @include box-sizing;
  @include transform(scale(2));
}

.float-right {
  width: 50%;
  height: 50px;
  background-color: green;
  @extend %float-right;
}
.clearfix {
  @extend %clearfix;
}

</style>
