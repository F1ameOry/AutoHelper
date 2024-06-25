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

export const useCarsStore = defineStore('cars1', () => {
  const demoCars1 = ref([
    {
      id: 'demo1',
      brand: 'BMW',
      model: '530d G30',
      mileageHistory: [
        {
          mileage: 4798,
          reason: "Запись вручную",
          date: '23.02.2022'
        },
        {
          mileage: 12958,
          reason: "Плановое ТО",
          date: '17.07.2022'
        },
        {
          mileage: 19873,
          reason: "Плановое ТО",
          date: '15.12.2022'
        },
        {
          mileage: 26748,
          reason: "Плановое ТО",
          date: '25.04.2023'
        },
        {
          mileage: 33578,
          reason: "Плановое ТО",
          date: '27.09.2023'
        },
        {
          mileage: 41937,
          reason: "Плановое ТО",
          date: '26.12.2023'
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
        {
          mileage: 66295,
          reason: "Ремонт задней подвескиПлановое ТО",
          date: '11.02.2024'
        },
        {
          mileage: 73583,
          reason: "Плановое ТО",
          date: '25.05.2024'
        },
      ],
      color: 'black',
      type: 'sedan',
      year: 2019,
      vin: '000000000',
      lastService: dayjs('05.25.2024'),
      lastServiceMileage: 1972
    },
  ]) as Ref<car[]>

  const cars1 = [] as car[]

  return { demoCars1, cars1 }
})