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

export const useCars3Store = defineStore('cars3', () => {
  const demoCars3 = ref([
    {
      id: 'demo3',
      brand: 'Toyota',
      model: 'Land Cruiser 200',
      mileageHistory: [
        {
          mileage: 12958,
          reason: "Плановое ТО",
          date: '17.01.2021'
        },
        {
          mileage: 19873,
          reason: "Плановое ТО",
          date: '05.05.2021'
        },
        {
          mileage: 26748,
          reason: "Плановое ТО",
          date: '25.06.2021'
        },
        {
          mileage: 33578,
          reason: "Плановое ТО",
          date: '14.10.2021'
        },
        {
          mileage: 41937,
          reason: "Плановое ТО",
          date: '16.01.2022'
        },
        {
          mileage: 49823,
          reason: "Плановое ТО",
          date: '28.06.2022'
        },
        {
          mileage: 52475,
          reason: "Обслуживание подвески",
          date: '25.11.2022'
        },
        {
          mileage: 57093,
          reason: "Плановое ТО",
          date: '27.03.2023'
        },
        {
          mileage: 66295,
          reason: "Плановое ТО",
          date: '07.09.2023'
        },
        {
          mileage: 73583,
          reason: "Запись вручную",
          date: '15.12.2023'
        },
        {
          mileage: 80984,
          reason: "Неисправность",
          date: '12.01.2024'
        },
        {
          mileage: 108159,
          reason: "Плановое ТО",
          date: '05.05.2024'
        },
      ],
      color: 'yellow',
      type: 'suv',
      year: 2012,
      vin: '000000000',
      lastService: dayjs('05.05.2024'),
      lastServiceMileage: 7416
    },
  ]) as Ref<car[]>

  const cars3 = [] as car[]

  return { demoCars3, cars3 }
})