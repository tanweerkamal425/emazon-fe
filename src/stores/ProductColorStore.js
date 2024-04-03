import {axios} from '@/util/axios.js'
import {defineStore} from 'pinia'

export const useProductColorStore = defineStore("product_color", {
    state() {
        //
        product_colors: []
    },

    actions: {
        getProductColors(query) {
            const url = '/api/v1/product-colors';

            return new Promise((resolve, reject) => {
                axios.get(url, query).then((res) => {
                    // console.log(res.data);
                    this.product_colors = res.data.data;
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        }
    }
})