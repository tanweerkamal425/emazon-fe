<template>
    <ProductForm @add-product="onAddProduct" name="Add Product" :productModel="product" :categories="categories" />
</template>

<script>
import ProductForm from './ProductForm.vue'
import {ProductModel} from '@/models/ProductModel.js'
import { mapState } from 'pinia'
import {useCategoryStore} from '@/stores/CategoryStore.js'
import { useProductStore } from '../../stores/ProductStore'


import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


export default {

    components: {
        ProductForm
    },

    data() {
        return {
            product: {...ProductModel},
            categories: []
        }
    },

    methods: {
        allCategories() {
            this.getAllCategories().then((res) => {
                this.categories = res.data.data;
            }).catch((err) => {
                console.log(err);
            })
        },

        onAddProduct() {
            console.log('function called')
            this.addProduct(this.product).then((res) => {
                this.$router.push({name: 'product.index', query: {productCreated: true}});
            }).catch((error) => {
                console.log(error);
            })
        },
    },


    mounted() {
        this.allCategories();
    },

    computed: {
        ...mapState(useCategoryStore, ["getAllCategories"]),
        ...mapState(useProductStore, ["addProduct"])
    }
}
</script>
