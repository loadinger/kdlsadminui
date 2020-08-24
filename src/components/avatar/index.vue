<template>
  <div class="c-avatar">
    <div class="c-avatar-container" :style="'background-image: url(' + (src || require('./avatar.jpg')) + ')'"></div>
  </div>
</template>

<script>
  import './index.styl'
  export default {
    props: ['src'],
  }
</script>
