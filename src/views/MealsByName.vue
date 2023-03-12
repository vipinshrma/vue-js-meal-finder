<template>
    <!-- <h1>Meal by names</h1> -->
    <div class="p-8 pb-0">
        <input type="text" v-model="keyword" name="" id="" class="rounded border-2 border-gray-200 w-full"
            placeholder="Search for meals" @change="searchMeals" />
    </div>
    <div class="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 p-8 gap-5">
        <MealItem v-for="meal in meals" :meal="meal" :key="meal.idMeal" />
    </div>
    <div v-if="!meals?.length" class="flex justify-center items-center"> 
        No meals found
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import {useRoute} from 'vue-router'
import MealItem from '../components/MealItem.vue';
import store from '../store';
const router = useRoute()

let keyword = ref('');
const meals = computed(() => store.state.data)

const searchMeals = () => {
    store.dispatch('searchMeals', keyword.value)
}

onMounted(()=>{
    const mealName = router.params.name;
    if(mealName){
        keyword.value = mealName;
        searchMeals()
    }
})



</script>