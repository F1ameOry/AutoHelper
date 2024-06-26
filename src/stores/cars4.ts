import { defineStore } from "pinia";
import dayjs, { Dayjs } from "dayjs";
import { ref, type Ref } from "vue";

type MileageHistoryBlock = {
  date: string;
  mileage: number;
  reason: string
}

type car = {
  id: string|number;
  brand: string;
  model: string;
  year: number;
  mileageHistory: Array<MileageHistoryBlock>;
  color: string,
  type: string,
  vin: string,
  lastService: Dayjs,
  lastServiceMileage: number
}

export const useCars4Store = defineStore('cars4', () => {
  const demoCars4 = ref([
    {
      id: 'demo4',
      brand: 'Mitsubishi',
      model: 'Lancer X',
      mileageHistory: [
        {
          mileage: 155555,
          reason: "Добавление Авто",
          date: '26.06.2024'
        },
      ],
      color: 'red',
      type: 'sedan',
      year: 2011,
      vin: '000000000',
      lastService: dayjs('06.26.2024'),
      lastServiceMileage: 0
    },
    
  ]) as Ref<car[]>

  const cars4 = [] as car[]

  return { demoCars4, cars4 }
})