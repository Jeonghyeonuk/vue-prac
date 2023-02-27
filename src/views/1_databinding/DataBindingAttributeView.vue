<template>
  <div>
    <input type="text" v-bind:value="userId" readonly />
    <br />
    <img :src="imgSrc" alt="" style="width: 100px; heigth: auto" />
    <br />
    <input type="search" name="" id="" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'jeonghyeonuk',
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlkNjn2DoAwiX17OezJ-ZuSlTDGaLBdLVgl-JouvcWrQ&s',
      txt1: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
