<template>
  <div>
    <input type="text" v-model="userId" />
    <!-- <button v-on:click="Myfunction">클릭</button> -->
    <button @click="Myfunction">클릭</button>
    <button @click="changeData">변경</button>
    <br />
    <input type="text" class="text" v-model="num1" /> +
    <input type="text" class="text" v-model="num2" /> =
    <span>{{ num1 + num2 }}</span>
    <br />
    <input type="text" class="text" v-model.number="num3" /> +
    <input type="text" class="text" v-model.number="num4" /> =
    <span>{{ num3 + num4 }}</span>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'jeonghyeonuk',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    Myfunction() {
      console.log(this.userId)
    },
    changeData() {
      this.userId = '변경되었습니다.'
    }
  }
}
</script>
