<script setup lang="ts">
import { useAuthStore, useCars4Store} from '@/stores';
import CAppBar from '../components/CAppBar.vue'
import { NButton } from 'naive-ui';
import { computed } from 'vue';
import CCarElementNew from '../components/CCarElementNew.vue'

console.log("cars")

const { cars4,  demoCars4 } = useCars4Store()
const { demo } = useAuthStore()


console.log(cars4)

const carsList4 = computed(()=> {
  return demo ? demoCars4 : cars4
})


</script>

<template>
  <div class="px-6">
    <CAppBar tertiary screen-name="Мои автомобили"/>
    <div class="flex flex-col gap-4">
      <NButton text class="self-center" @click="$router.push('/cars/add')"> Добавить автомобиль </NButton>
      
      <div class="list flex flex-col gap-4 mb-6">
        <CCarElementNew :title="`${car.brand} ${car.model}`" :mileage="car.mileageHistory[car.mileageHistory.length]?.mileage" :lastService="car.lastService.locale('ru').format('DD.MM.YYYY')" :lastServiceMileage="car.lastServiceMileage" v-for="car of carsList4" :key="car.id" @click="$router.push('/car/idNew')"/>
      </div>
      
      <NButton text class="self-center" @click="$router.push('/')"> Выйти из аккаунта </NButton>
    </div>
  </div>
</template>