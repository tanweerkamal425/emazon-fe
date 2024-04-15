import {axios} from '@/util/axios.js'
import {defineStore} from 'pinia'

export const useProductImageStore = defineStore("product_image", {
    state() {
        //
        product_images: []
    },

    actions: {
        getProductImages(query) {
            let queryParams = new URLSearchParams(query);
            const url = '/api/v1/product-images?' + queryParams.toString();

            return new Promise((resolve, reject) => {
                axios.get(url, query).then((res) => {
                    // console.log(res.data);
                    this.product_images = res.data.data;
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        },
    }
})