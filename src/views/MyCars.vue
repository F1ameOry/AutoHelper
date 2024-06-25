<script setup lang="ts">
import { useAuthStore, useCarsStore, useCars2Store, useCars3Store } from '@/stores';
import CAppBar from '../components/CAppBar.vue'
import CCarElement from '../components/CCarElement.vue'
import CCarElement2 from '../components/CCarElement2.vue'
import CCarElement3 from '../components/CCarElement3.vue'
import { NButton } from 'naive-ui';
import { computed } from 'vue';


console.log("cars")

const { cars1,  demoCars1 } = useCarsStore()
const { cars2,  demoCars2 } = useCars2Store()
const { cars3,  demoCars3 } = useCars3Store()
const { demo } = useAuthStore()

console.log(cars1)

const carsList = computed(()=> {
  return demo ? demoCars1 : cars1
})

console.log(cars2)

const carsList2 = computed(()=> {
  return demo ? demoCars2 : cars2
})

console.log(cars3)

const carsList3 = computed(()=> {
  return demo ? demoCars3 : cars3
})

</script>

<template>
  <div class="px-6">
    <CAppBar tertiary screen-name="Мои автомобили"/>
    <div class="flex flex-col gap-4">
      <NButton text class="self-center" @click="$router.push('/cars/add')"> Добавить автомобиль </NButton>
      <div class="list flex flex-col gap-4 mb-6">
        <CCarElement :title="`${car.brand} ${car.model}`" :mileage="car.mileageHistory[car.mileageHistory.length]?.mileage" :lastService="car.lastService.locale('ru').format('DD.MM.YYYY')" :lastServiceMileage="car.lastServiceMileage" v-for="car of carsList" :key="car.id" @click="$router.push('/car/id1')"/>
      </div>
      <div class="list flex flex-col gap-4 mb-6">
        <CCarElement2 :title="`${car.brand} ${car.model}`" :mileage="car.mileageHistory[car.mileageHistory.length]?.mileage" :lastService="car.lastService.locale('ru').format('DD.MM.YYYY')" :lastServiceMileage="car.lastServiceMileage" v-for="car of carsList2" :key="car.id" @click="$router.push(`/car/id2`)"/>
      </div>
      <div class="list flex flex-col gap-4 mb-6">
        <CCarElement3 :title="`${car.brand} ${car.model}`" :mileage="car.mileageHistory[car.mileageHistory.length]?.mileage" :lastService="car.lastService.locale('ru').format('DD.MM.YYYY')" :lastServiceMileage="car.lastServiceMileage" v-for="car of carsList3" :key="car.id" @click="$router.push(`/car/id3`)"/>
      </div>
      <NButton text class="self-center" @click="$router.push('/')"> Выйти из аккаунта </NButton>
    </div>
  </div>
</template>