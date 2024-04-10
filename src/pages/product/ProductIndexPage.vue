<template>
    <ProductTable :products="products" />
</template>

<script>
// import {onMounted} from 'vue'
import {initDropdowns, initTooltips, initModals} from 'flowbite'
import axios from 'axios'

import {useProductStore} from '@/stores/ProductStore.js'
import {mapState} from 'pinia'
import ProductTable from './ProductTable.vue'




export default {
    components: {
        ProductTable
    },

    data() {
        return {
            products: [],
        }
    },

    methods: {
        fetchProducts(query = {}) {
			this.getProducts(query).then((data) => {
				console.log(data);
				this.products = data.data;
			}).catch((error) => {
				// console.error(error);
			}).finally(() => {
				//
			});
		},
        show() {
            this.$toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
        }
    },

    mounted() {
        this.fetchProducts();
        initDropdowns();
        initModals();
    },

    computed: {
        ...mapState(useProductStore, ['getProducts'])
    }
}
</script>
