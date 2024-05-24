<template>
    <ProductForm @add-Product="onEditProduct" name="Edit Product" :productModel="product" :categories="categories" />
</template>

<script>
import ProductForm from "./ProductForm.vue";
import {useProductStore} from '@/stores/ProductStore.js';
import { useCategoryStore } from "../../stores/CategoryStore.js";
import { useRoute } from 'vue-router';
import { mapState } from 'pinia';
import { ProductModel } from "../../models/ProductModel.js";

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    components: {
        ProductForm
    },

    data() {
        return {
            product: {},
            categories: [],
            route: null,
        }
    },

    methods: {
        fetchProduct(id) {
            this.getProduct(id).then((res) => {
                this.product = res.product;
                console.log(res.product);
            }).catch((err) => {
                console.error(err);
            })
        },

        allCategories() {
            this.getAllCategories().then((res) => {
                this.categories = res.data.data;
            }).catch((err) => {
                console.log(err);
            })
        },

        onEditProduct() {
            console.log('function called')
            this.editProduct(this.route.params.id, this.product).then((res) => {
                console.log('product edited');
                this.$router.push({name: 'product.index'});
            }).catch((err) => {
                console.error(err);
            })
        }
    },

    mounted() {
        this.route = useRoute();
        this.fetchProduct(this.route.params.id);
        this.allCategories();
    },

    computed: {
        ...mapState(useProductStore, ["getProduct", "editProduct"]),
        ...mapState(useCategoryStore, ["getAllCategories"])
    }
}

</script>
