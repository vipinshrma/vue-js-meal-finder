<template>
    <div class="flex flex-col justify-center pt-8">
        <div class="flex gap-2 mt-2 justify-center flex-wrap">
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
                {{ letter }}
            </router-link>
        </div>
    </div>
    <div class="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 p-8 gap-5">
        <MealItem v-for="meal in meals" :meal="meal" :key="meal.idMeal" />
    </div>
    
</template>

<script setup>
import { ref,computed ,onMounted ,watch} from 'vue';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';
import store from '../store';

const letters = 'ABCDEFGHIJKLMNOPQRSUVXYZ'
let keyword = ref('');
const route = useRoute()


let meals = computed(()=>store.state.mealsByLetter)

onMounted(()=>{
    store.dispatch('searchMealsByLetter',route.params.letter)
})

watch(route,()=>{
    store.dispatch('searchMealsByLetter',route.params.letter)

})

</script>