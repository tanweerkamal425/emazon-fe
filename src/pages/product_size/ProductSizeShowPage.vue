<template>
    <ProductShowTable :product="product" />
    <SizeShowTable :size="size" />
</template>

<script>
import { mapState } from 'pinia';
import { useProductStore } from '@/stores/ProductStore.js';
import { useRoute } from 'vue-router';
import { useProductSizeStore } from '../../stores/ProductSizeStore';
import ProductShowTable from '../product/ProductShowTable.vue'
import SizeShowTable from '../size/SizeShowTable.vue';
import {useSizeStore} from '@/stores/SizeStore.js';

export default {
    components: {
        ProductShowTable,
        SizeShowTable
    },

    data() {
        return {
            product: {},
            size: {},
            id: null
        }
    },

    methods: {
        fetchProductWithSize(id) {
            this.getProductWithSize(id).then((res) => {
                console.log(res.data);
                this.getProduct(res.data.product_id).then((res) => {
                    this.product = res.product;
                })
                this.getSize(res.data.size_id).then((res) => {
                    this.size = res.data.data;
                    console.log(this.size);
                })
            }).catch((err) => {
                console.log(err);
            })
        }
    },

    mounted() {
        this.id = useRoute().params.id;
        this.fetchProductWithSize(this.id);
    },

    computed: {
        ...mapState(useProductSizeStore, ["getProductWithSize"]),
        ...mapState(useProductStore, ["getProduct"]),
        ...mapState(useSizeStore, ["getSize"]),
    }


}
</script>