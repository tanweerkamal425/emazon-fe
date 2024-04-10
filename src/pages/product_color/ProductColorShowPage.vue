<template>
    <ProductShowTable :product="product" />
    <ColorShowTable :color="color" />
</template>

<script>
import { mapState } from 'pinia';
import { useProductStore } from '@/stores/ProductStore.js';
import { useRoute } from 'vue-router';
import { useProductColorStore } from '../../stores/ProductColorStore';
import ProductShowTable from '../product/ProductShowTable.vue'
import ColorShowTable from '../color/ColorShowTable.vue';
import {useColorStore} from '@/stores/ColorStore.js';

export default {
    components: {
        ProductShowTable,
        ColorShowTable
    },

    data() {
        return {
            product: {},
            color: {},
            id: null
        }
    },

    methods: {
        fetchProductWithColor(id) {
            this.getProductWithColor(id).then((res) => {
                console.log(res.data);
                this.getProduct(res.data.product_id).then((res) => {
                    this.product = res.product;
                    console.log(res);
                })
                this.getColor(res.data.color_id).then((res) => {
                    this.color = res.data;
                })
            }).catch((err) => {
                console.log(err);
            })
        }
    },

    mounted() {
        this.id = useRoute().params.id;
        console.log(this.id);
        this.fetchProductWithColor(this.id);
    },

    computed: {
        ...mapState(useProductColorStore, ["getProductWithColor"]),
        ...mapState(useProductStore, ["getProduct"]),
        ...mapState(useColorStore, ["getColor"]),
    }


}
</script>