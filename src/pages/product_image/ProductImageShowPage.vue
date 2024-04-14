<template>
    <Gallery :imageArr="images" />
    <ProductShowTable :product="product" />
</template>

<script>
import Gallery from '../../components/flowbite/Gallery.vue'
import ProductShowTable from '../product/ProductShowTable.vue'
import { useProductImageStore } from '../../stores/ProductImageStore'
import { mapState } from 'pinia'
import { useRoute } from 'vue-router'
import { useProductStore } from '../../stores/ProductStore'

export default {
    components: {
        ProductShowTable,
        Gallery,
    },

    data() {
        return {
            product: {},
            images: [],
            id: null,
        }
    },

    methods: {
        getProductWithImages(id) {
            this.getProductImage(id).then((res) => {
                this.getProduct(res.data.product_id).then((res) => {
                    console.log(res);
                    this.product = res.product;
                    this.images = res.images;
                    console.log(res.images);
                })
            }).catch((err) => {
                console.error(err);
            })
        }
    },

    mounted() {
        this.id = useRoute().params.id;
        this.getProductWithImages(this.id);
    },

    computed: {
        ...mapState(useProductImageStore, ["getProductImage", "getAllImages"]),
        ...mapState(useProductStore, ["getProduct"]),
    }
}
</script>