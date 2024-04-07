<template>
    <SizeForm @add-size="onEditSize" :sizeModel="size" />
</template>

<script>
import { mapState } from 'pinia'
import { useRoute } from 'vue-router'
import SizeForm from './SizeForm.vue'
import {useSizeStore} from '@/stores/SizeStore'

export default {
    components: {
        SizeForm
    },

    data() {
        return {
            size: {},
            id: null
        }
    },

    methods: {
        fetchSize(id) {
            this.getSize(id).then((res) => {
                this.size = res.data.data;
            }).catch((err) => {
                console.error(err);
            })
        },

        onEditSize() {
            this.editSize(this.id, this.size).then((res) => {
                console.log('size edited');
                this.$router.push({name: 'size.index'});
            }).catch((err) => {
                console.error(err);
            })
        }
    },

    mounted() {
        this.id = useRoute().params.id;
        this.fetchSize(this.id);
    },

    computed: {
        ...mapState(useSizeStore, ['getSize', 'editSize'])
    }
}
</script>
