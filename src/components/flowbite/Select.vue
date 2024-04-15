<template>
<fwb-select
    v-model="selected"
    :options="countries"
    label="Select a country"
/>
</template>

<script>
import { FwbSelect } from 'flowbite-vue'

export default {
    components: {
        FwbSelect,
    },

    data() {
        return {
            selected: '',
            // countries : [
            //     { value: 'us', name: 'United States' },
            //     { value: 'ca', name: 'Canada' },
            //     { value: 'fr', name: 'France' },
            // ]
        }
    },


}

</script>