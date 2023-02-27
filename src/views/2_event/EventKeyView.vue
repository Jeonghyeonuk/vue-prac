<template>
  <div>
    <!-- 방법1 바닐라와 같은방법으로-->
    <!-- <input
      type="search"
      name=""
      id=""
      v-model="serarText"
      @keyup="checkEnter($event)"
    /> -->
    <!-- 방법 2 keyup.enter -->
    <!-- .enter, .tab, .delete, .esc ...등등 -->
    <input
      type="search"
      name=""
      id=""
      v-model="serarText"
      @keyup.enter="doSearch"
    />
    <button @click="doSearch">조회</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      serarText: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      console.log(this.serarText)
    },
    checkEnter(event) {
      if (event.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>
