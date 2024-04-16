<template>
    {{ searchInput }}
    <ProductTable :categories="categories" @input="onInput" @page-change="onPageChange" @selected="onSelected" :products="products" @from-date="onDateChange" @to-date="onDateChange" />
</template>

<script>
// import {onMounted} from 'vue'
import {initDropdowns, initTooltips, initModals} from 'flowbite'
import axios from 'axios'

import {useProductStore} from '@/stores/ProductStore.js'
import {mapState} from 'pinia'
import ProductTable from './ProductTable.vue'
import { useCategoryStore } from '../../stores/CategoryStore'




export default {
    components: {
        ProductTable
    },

    data() {
        return {
            products: [],
            categories: [],
            checkedCategories: [],
            searchInput: null,
            price: null,
            categoryId: null,
            query: {
                q: '',
                category_id: '',
                price_order: 0,
                page: 1,
                from_date: '',
                to_date: '',
            },
        }
    },

    methods: {
        fetchProducts(query = {}) {
            console.log(query);
			this.getProducts(query).then((data) => {
				// console.log(data);
				this.products = data.data;
                console.log(data.data);
                this.$router.push({name: 'product.index', query: query});
			}).catch((error) => {
				// console.error(error);
			}).finally(() => {
				//
			});
		},

        fetchCategories() {
            console.log('ok');
            this.getAllCategories().then((res) => {
                // console.log(res.data.data);
                this.categories = res.data.data;
            })
        },
        
        onPageChange(pageNum) {
            this.query.page = pageNum
            this.fetchProducts(this.query);
        },

        // onSearchInput(query) {
        //     // console.log(query);
        //     this.fetchProducts({q: query});
        // },

        onInput(value) {
            this.searchInput = value;
        },

        onChecked(value) {
            console.log(value);
            this.categoryId = value;
        },

        onSelected(value) {
            // console.log(value);
            this.categoryId = value.categoryId;
            this.price = value.price;
        },

        onDateChange(obj) {
            if (obj.id === 'from-date') {
                this.query.from_date = obj.fromDate != null ? obj.fromDate : '';
            }
            if (obj.id === 'to-date') {
                this.query.to_date = obj.toDate != null ? obj.toDate : '';
            }
            this.fetchProducts(this.query);
        }
    },

    mounted() {
        this.fetchProducts();
        this.fetchCategories();
        initDropdowns();
        initModals();
    },

    computed: {
        ...mapState(useProductStore, ['getProducts']),
        ...mapState(useCategoryStore, ['getAllCategories']),
    },

    watch: {
        searchInput() {
            // console.log(this.searchInput);
            this.query.q = this.searchInput;
            this.fetchProducts(this.query);
        },

        categoryId() {
            this.query.category_id = this.categoryId;
            this.fetchProducts(this.query);
        },

        price() {
            this.query.price_order = this.price;
            this.fetchProducts(this.query);
        }
    }
    
}
</script>
