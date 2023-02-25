<template>
  <div>
    <h1>Hello {{ userName }}</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: 'jeonghyeonuk',
      msg: 'welcome'
    }
  }
}
</script>
<style scoped></style>
