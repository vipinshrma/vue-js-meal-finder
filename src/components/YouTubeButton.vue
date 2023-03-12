<template>
    <div class="flex items-center justify-between">
        <a :href="props.href" target="_blank"
            class="px-3 py-2 border-2 bg-red-500 hover:bg-red-600 text-white rounded transition-colors ">
            <slot></slot>
        </a>
        <!-- view button  -->
        <!-- <router-link to="/detail/meal.idMeal" class="px-3 py-2 border-2 bg-purple-500 hover:bg-purple-600 text-white rounded ">
                        View
                    </router-link> -->
    </div>
</template>

<script setup>

let props = defineProps({
    href: String
})

</script>  