<template>
  <div id="app">
    <h1 class="red">あいさつ：{{msg}}</h1>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {msg: "hello Vue"}
  }
}
</script>

<style scoped>
.red {
  color: red;
}
</style>
