<template>
    <ColorForm @add-color="onAddColor" :colorModel="color" />
</template>

<script>
import { mapState } from 'pinia'
import ColorForm from './ColorForm.vue'
import {useColorStore} from '@/stores/ColorStore'

export default {
    components: {
        ColorForm
    },

    data() {
        return {
            color: {
                color: "",
                code: ""
            }
        }
    },

    methods: {
        onAddColor() {
            console.log('called');
            this.addColor(this.color).then((res) => {
                console.log('color added');
                this.$router.push({name: 'color.index'});
            }).catch((err) => {
                console.error(err);
            })
        },
    },

    computed: {
        ...mapState(useColorStore, ['addColor']),
    }
}
</script>
