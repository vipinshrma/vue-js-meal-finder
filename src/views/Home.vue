<template>
    <div class="px-8 mt-5">
        <h1 class="text-3xl">Random Meals</h1>
    </div>
    <div class="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 p-8 gap-5">
        <MealItem v-for="meal in randomMeals" :meal="meal" :key="meal.idMeal" />
    </div>
  
</template>

<script setup>

import { ref,onMounted} from 'vue';
import axiosClient from '../axiosClient';
import MealItem from '../components/MealItem.vue';


let randomMeals = ref([]);

onMounted(()=>{
    axiosClient.get('random.php').then((data)=>{
        const {meals} = data?.data || {}
        randomMeals.value = meals || [];
    })
})

</script>