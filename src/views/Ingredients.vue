<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
        <div class="mb-4">
            <input type="text" v-model="keyword" name="" id="" class="rounded border-2 border-gray-200 w-full"
                placeholder="Search for ingredients" />
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-5 sm:grid-cols-1">
            <router-link :to="{ name: 'byIngredients', params: { ingredients: ingredient.strIngredient } }"
            v-for="ingredient in computedIngredients" :key="ingredient.idIngredient"
            class="block bg-white rounded p-3 mb-3 shadow">
            <h3 class="text-2xl font-bold mb-2">
                {{ ingredient.strIngredient }}
            </h3>
            <!-- <p>
                {{ ingredient.strDescription }}
            </p> -->
        </router-link>
        </div>
       
    </div>
    <div v-if="!computedIngredients?.length" class="flex justify-center items-center">
        No ingredients found
    </div>
</template>

<script setup>

import { ref, onMounted, computed } from 'vue';
import axiosClient from '../axiosClient';

let keyword = ref('')
let ingredients = ref([])

const computedIngredients = computed(() => {
    if (!computedIngredients) return ingredients;
    return ingredients.value.filter((i, idx) => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
})

onMounted(() => {
    axiosClient.get('list.php?i=list').then((data) => {
        ingredients.value = data?.data?.meals || []
    })
})

</script>