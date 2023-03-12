import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import MealsByName from '../views/MealsByName.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'





export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name:'defaultLayout',
            path:'/',
            component:DefaultLayout,
            children:[
                {
                    name: 'home',
                    path: '/',
                    component:Home
                },
                {
                    name: 'byLetter',
                    path: '/letter/:letter?',
                    component:MealsByLetter
                },
                {
                    name: 'byName',
                    path: '/by-name/:name?',
                    component:MealsByName
                },
                {
                    name: 'ingredients',
                    path: '/ingredients',
                    component:Ingredients
                },
                {
                    name: 'byIngredients',
                    path: '/by-Ingredients/:ingredients?',
                    component:MealsByIngredients
                },
                {
                    path:'/meal-details/:id',
                    name:'mealDetails',
                    component:MealDetails 
                }
            ]
        },
       
    ],
})