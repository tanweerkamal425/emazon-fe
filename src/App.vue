<template>
  <MainLayout></MainLayout>
</template>

<script>
import MainLayout from './components/layouts/MainLayout.vue'
import {onMounted} from 'vue'
import {initDropdowns} from 'flowbite'


  export default {
    components: {
      MainLayout,
    },
    setup() {
        onMounted(() => {
            initDropdowns();
        })
    }
  }
</script>


