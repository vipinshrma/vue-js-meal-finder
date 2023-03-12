// export default {}

export const setSearchMeals = (state, data) => {
    state.data = data;
}

export const mealsByLetter = (state, data) => {
    state.mealsByLetter = data;
}

export const mealsByIngredients = (state, data) => {
    state.mealsByIngredients = data;
}