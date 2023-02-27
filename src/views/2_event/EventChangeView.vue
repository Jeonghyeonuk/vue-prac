<template>
  <div>
    <select @change="changeCity($event)" v-model="selectedCity">
      <option value="">도시선택</option>
      <option
        :value="city.cityCode"
        :key="city.cityCode"
        v-for="city in cityList"
      >
        {{ city.title }}
      </option>
    </select>
    <!-- 방법1 change이벤트를 사용하고, 선택된 동의 리스트를 따로 만들어서 사용-->
    <select>
      <option
        :value="dong.dongCode"
        v-for="dong in selectedDongList"
        :key="dong.dongCode"
      >
        {{ dong.dongTitle }}
      </option>
    </select>
    <!-- 방법2 change이벤트가 없어도 동작함, 가독성이 떨어지기때문에 추천하지않음-->
    <!-- <select>
      <option
        :value="dong.dongCode"
        v-for="dong in dongList.filter((dong) => {
          return dong.cityCode === this.selectedCity
        })"
        :key="dong.dongCode"
      >
        {{ dong.dongTitle }}
      </option>
    </select> -->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selectedCity: '',
      cityList: [
        { cityCode: '02', title: '서울' },
        { cityCode: '032', title: '인천' },
        { cityCode: '064', title: '제주' }
      ],
      dongList: [
        { cityCode: '02', dongCode: '1', dongTitle: '서울 1동' },
        { cityCode: '02', dongCode: '2', dongTitle: '서울 2동' },
        { cityCode: '02', dongCode: '3', dongTitle: '서울 3동' },
        { cityCode: '02', dongCode: '4', dongTitle: '서울 4동' },
        { cityCode: '032', dongCode: '1', dongTitle: '인천 1동' },
        { cityCode: '032', dongCode: '2', dongTitle: '인천 2동' },
        { cityCode: '032', dongCode: '3', dongTitle: '인천 3동' },
        { cityCode: '032', dongCode: '4', dongTitle: '인천 4동' },
        { cityCode: '064', dongCode: '1', dongTitle: '부산 1동' },
        { cityCode: '064', dongCode: '2', dongTitle: '부산 2동' },
        { cityCode: '064', dongCode: '3', dongTitle: '부산 3동' },
        { cityCode: '064', dongCode: '4', dongTitle: '부산 4동' }
      ],
      selectedDongList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeCity(event) {
      console.log(event)
      console.log(this.selectedCity)
      this.selectedDongList = this.dongList.filter((dong) => {
        return dong.cityCode === this.selectedCity
      })
    }
  }
}
</script>
