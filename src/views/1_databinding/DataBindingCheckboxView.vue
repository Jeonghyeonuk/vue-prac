<template>
  <div>
    <div>
      <input type="checkbox" v-model="favoriteLang" id="html" value="HTML" />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="checkbox" v-model="favoriteLang" id="css" value="CSS" />
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="checkbox" v-model="favoriteLang" id="js " value="JS" />
      <label for="js">JavaScript</label>
    </div>
    <div>선택한 언어 : {{ favoriteLang }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      favoriteLang: ['JS'] // vlaue에 선택해놓은 값을 미리입력하면 체크가된 상태로 로딩됨, 여러개 선택가능 = 배열
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
