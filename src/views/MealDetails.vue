<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-5xl font-bold mb-5">{{ mealData.strMeal }}</h1>
        <img :src="mealData.strMealThumb" :alt="mealData.strMeal" class="max-w-100" />
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold">Category:</strong> {{ mealData.strCategory }}
            </div>
            <div>
                <strong class="font-bold">Area:</strong> {{ mealData.strArea }}
            </div>
            <div>
                <strong class="font-bold">Tags:</strong> {{ mealData.strTags }}
            </div>
        </div>

        <div class="my-3">
            {{ mealData.strInstructions }}
        </div>

        <div>
            <div class="grid  grid-cols-1 sm:grid-cols-2">
                <div>
                    <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
                    <ul>
                        <template v-for="(el, indx) of new Array(20)">
                            <li v-if='mealData[`strIngredient${indx + 1}`]'>
                                {{ indx + 1 }} .{{ mealData[`strIngredient${indx + 1}`] }}
                            </li>

                        </template>
                    </ul>
                </div>
                <div>
                    <h2 class="text-2xl font-semibold mb-2">Measures</h2>
                    <ul>
                        <template v-for="(el, indx) of new Array(20)">
                            <li v-if='mealData[`strMeasure${indx + 1}`]'>
                                {{ indx + 1 }} .{{ mealData[`strMeasure${indx + 1}`] }}
                            </li>

                        </template>
                    </ul>
                </div>

            </div>
        </div>
        <div mt-4 class="flex">
            <YouTubeButton :href="mealData.strYoutube" >Go to youtube</YouTubeButton>
            <a 
            :href="mealData.strSource"
            target="_blank"
            class="ml-2 py-2 px-3 rounded  border-2 border-transparent text-indigo-500 hover:bg-indigo-500 hover:text-white"
            >
            View Original Source
            </a>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axiosClient from '../axiosClient';
import YouTubeButton from '../components/YouTubeButton.vue';
const router = useRoute();

let mealData = ref({})


onMounted(() => {
    if (router.params.id) {
        axiosClient.get(`lookup.php?i=${router.params.id}`).then(({ data: { meals } }) => {
            mealData.value = meals?.[0] || {};
        })
    }
})

</script>