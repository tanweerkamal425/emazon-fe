import {axios} from '@/util/axios.js'
import {defineStore} from 'pinia'

export const useProductSizeStore = defineStore("product_size", {
    state() {
        //
        product_sizes: []
    },

    actions: {
        getProductSizes(query) {
            const url = '/api/v1/product-sizes';

            return new Promise((resolve, reject) => {
                axios.get(url, query).then((res) => {
                    // console.log(res.data);
                    this.product_sizes = res.data.data;
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        }
    }
})