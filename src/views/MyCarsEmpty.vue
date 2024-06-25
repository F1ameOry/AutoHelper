<script setup lang="ts">
import { useAuthStore } from '@/stores';
import CAppBar from '../components/CAppBar.vue'
import { NButton } from 'naive-ui';
import { computed } from 'vue';


</script>

<template>
  <div class="px-6">
    <CAppBar tertiary screen-name="Мои автомобили"/>
    <div class="flex flex-col gap-4">
      <NButton text class="self-center" @click="$router.push('/cars/add')"> Добавить автомобиль </NButton>
      

      
      <NButton text class="self-center" @click="$router.push('/')"> Выйти из аккаунта </NButton>
    </div>
  </div>
</template>