<template>
     <div  class="bg-white rounded-xl shadow hover:scale-105 transition-all">
            <router-link :to="{ name:'mealDetails', params:{id:meal.idMeal}}">
                <img :src="meal.strMealThumb" alt="atrMeal" class="rounded-t-xl w-full h-48 object-cover">
            </router-link>
            <div class="p-3">
                <h3 class="font-semibold">{{ meal.strMeal }}</h3>
                <p class="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, voluptate pariatur, in nam ea veniam beatae sit nesciunt aut repellendus voluptatibus voluptas omnis. A, modi omnis commodi impedit iure quidem.</p>
                <YouTubeButton :href="meal.strYoutube" >Youtube</YouTubeButton>
            </div>
        </div>
</template>

<script setup>
import YouTubeButton from './YouTubeButton.vue';

let {meal} = defineProps({
    meal:Object
})
</script>