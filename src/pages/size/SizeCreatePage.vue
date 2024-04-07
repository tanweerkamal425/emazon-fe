<template>
    <SizeForm @add-size="onAddSize" :sizeModel="size" />
</template>

<script>
import { mapState } from 'pinia';
import SizeForm from "./SizeForm.vue";
import {useSizeStore} from '@/stores/SizeStore'

export default {
    components: {
        SizeForm
    },

    data() {
        return {
            size: {
                size: ""
            }
        }
    },

    methods: {
        onAddSize() {
            // console.log('called');
            this.addSize(this.size).then((res) => {
                console.log('size added');
                this.$router.push({name: 'size.index'});
            }).catch((err) => {
                console.error(err);
            })
        }
    },

    computed: {
        ...mapState(useSizeStore, ['addSize']),
    }

}
</script>
