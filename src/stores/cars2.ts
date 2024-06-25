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

export const useCars2Store = defineStore('cars2', () => {
  const demoCars2 = ref([
    {
      id: 'demo2',
      brand: 'Volkswagen',
      model: 'Caravelle',
      mileageHistory: [
        {
          mileage: 4798,
          reason: "Запись вручную",
          date: '12.02.2022'
        },
        {
          mileage: 12958,
          reason: "Плановое ТО",
          date: '17.05.2022'
        },
        {
          mileage: 19873,
          reason: "Плановое ТО",
          date: '03.08.2022'
        },
        {
          mileage: 26748,
          reason: "Плановое ТО",
          date: '24.11.2022'
        },
        {
          mileage: 33578,
          reason: "Плановое ТО",
          date: '27.01.2023'
        },
        {
          mileage: 41937,
          reason: "Плановое ТО",
          date: '26.03.2023'
        },
        {
          mileage: 49823,
          reason: "Плановое ТО",
          date: '28.06.2023'
        },
        {
          mileage: 57093,
          reason: "Плановое ТО",
          date: '12.09.2023'
        },
      ],
      color: 'white',
      type: 'van',
      year: 2016,
      vin: '000000000',
      lastService: dayjs('12.09.2023'),
      lastServiceMileage: 7656
    },
  ]) as Ref<car[]>

  const cars2 = [] as car[]

  return { demoCars2, cars2 }
})