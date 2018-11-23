<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ss msg="sadsa"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ss from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    ss
  }
}
</script>
