<template>
    <ColorForm @add-color="onEditColor" :colorModel="color" />
</template>

<script>
import ColorForm from "./ColorForm.vue";
import {mapState} from 'pinia'
import {useRoute} from 'vue-router'
import {useColorStore} from '@/stores/ColorStore.js'

export default {
    components: {
        ColorForm
    },

    data() {
        return {
            color: {},
            id: null
        }
    },

    methods: {
        fetchColor(id) {
            this.getColor(id).then((res) => {
                this.color = res.data;
            }).catch((err) => {
                console.error(err);
            })
        },

        onEditColor() {
            this.editColor(this.id, this.color).then((res) => {
                console.log('color edited');
                this.$router.push({name: 'color.index'});
            }).catch((err) => {
                console.error(err);
            })
        }
    },

    mounted() {
        this.id = useRoute().params.id;
        this.fetchColor(this.id)
    },

    computed: {
        ...mapState(useColorStore, ['getColor', 'editColor'])
    }
}
</script>
