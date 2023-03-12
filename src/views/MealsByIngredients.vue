<template>
    
    <div class="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 p-8 gap-5">
        <MealItem v-for="meal in meals" :meal="meal" :key="meal.idMeal" />
    </div>
</template>

<script setup>
import { ref,computed ,onMounted ,watch} from 'vue';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';
import store from '../store';

const route = useRoute()


let meals = computed(()=>store.state.mealsByIngredients)

onMounted(()=>{
    store.dispatch('searchMealsByIngredients',route.params.ingredients)
})

watch(route,()=>{
    store.dispatch('searchMealsByIngredients',route.params.ingredients)

})

</script>