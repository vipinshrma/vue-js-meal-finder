<template>
  <header class="bg-white h-16 shadow flex justify-between items-stretch">
    <router-link :to="{ name: 'home' }" class="inline-flex items-center h-full p-5">
      Home
    </router-link>
    <div class="flex items-center gap-1">
      <router-link :to="{ name: 'byName' }" class="inline-flex items-center px-2 h-full transition-colors"
        :class="[activePath === 'byName' ? 'bg-purple-100'  :'hover:bg-purple-100' ]">
        Search Meals
      </router-link>
      <router-link :to="{ name: 'byLetter' }"
        class=" inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        :class="[activePath === 'byLetter' ? 'bg-purple-100'  :'hover:bg-purple-100' ]">
        
        Meals By Letter
      </router-link>
      <router-link :to="{ name: 'ingredients' }"
        class=" inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        :class="[activePath === 'ingredients' ? 'bg-purple-100'  :'hover:bg-purple-100' ]"
        >
        Meals By Ingredients
      </router-link>
    </div> 
  </header>
</template>

<script setup>
import { ref, watch ,onMounted} from 'vue';
import { useRoute } from 'vue-router';


const router = useRoute()
let activePath = ref('')

watch(router, () => {
  activePath.value = router.name
})


onMounted(()=>{
  activePath.value = router.name
})


</script>