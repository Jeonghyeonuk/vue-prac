<template>
  <div>
    <select v-model="selectedCity">
      <option value="">지역을 선택하세요</option>
      <option value="02">서울</option>
      <option value="032">인천</option>
      <option value="064">부산</option>
    </select>
    <button @click="checkValue">클릭</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selectedCity: '0'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    checkValue() {
      console.log(this.selectedCity)
    }
  }
}
</script>
