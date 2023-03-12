// export default {}

import axiosClient from "../axiosClient"

export const searchMeals = ({ commit }, payload) => {
    axiosClient.get(`search.php?s=${payload}`).then(({ data }) => {
        commit('setSearchMeals', data?.meals || [])  
    })
}

export const searchMealsByLetter = ({ commit }, payload) => {
    axiosClient.get(`search.php?f=${payload}`).then(({ data }) => {
        commit('mealsByLetter', data?.meals || [])  
    })
}
export const searchMealsByIngredients = ({ commit }, payload) => {
    axiosClient.get(`filter.php?i=${payload}`).then(({ data }) => {
        commit('mealsByIngredients', data?.meals || [])  
    })
}