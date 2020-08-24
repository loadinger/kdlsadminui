<template>
  <div class="home">
    <avatar />
  </div>
</template>

<script>
import card from '@/components/card/index.vue'
import avatar from '@/components/avatar/index.vue'

export default {
  name: 'Home',
  components: {
    avatar,
  }
}
</script>
