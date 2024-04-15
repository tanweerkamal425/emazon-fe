<template>
    <fwb-pagination @click="$emit('page-change', currentPage)" v-model="currentPage" :total-items="100"></fwb-pagination>
    <!-- <fwb-pagination v-model="currentPage" :total-items="100" large></fwb-pagination> -->
</template>


<script>
import { FwbPagination } from 'flowbite-vue'

export default {
    components: {
        FwbPagination
    },

    data() {
        return {
            currentPage: 1
        }
    }
}
</script>