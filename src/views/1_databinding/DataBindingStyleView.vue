<template>
  <div>
    <div :style="style">스타일 바인딩: 글씨는 green, 폰트 : 30px</div>
    <button @click="style.color = 'red'">색 변경</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      style: {
        color: 'green',
        fontSize: '30px'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
