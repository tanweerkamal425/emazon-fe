import {axios} from '@/util/axios.js'
import {defineStore} from 'pinia'

export const useProductStore = defineStore("product", {
    state() {
        //
        products: []
    },

    actions: {
        getProducts(query) {
            const url = '/api/v1/products';

            return new Promise((resolve, reject) => {
                axios.get(url, query).then((res) => {
                    // console.log(res.data);
                    this.products = res.data.data;
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            })
        },

        getProduct(id) {
            const url = `/api/v1/products/${id}`;

            return new Promise((resolve, reject) => {
                axios.get(url).then((res) => {
                    // console.log(res.data);
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            })
        },

        addProduct(product) {
            const url = '/api/v1/products';

            return new Promise((resolve, reject) => {
                axios.post(url, product).then((res) => {
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            })
        },

        editProduct(id, product) {
            const url = `/api/v1/products/${id}`;

            return new Promise((resolve, reject) => {
                axios.patch(url, product).then((res) => {
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                })
            })
        },

        uploadImage(id, file) {
            const url = `/api/v1/products/${id}/product-images`;

            const form = new FormData();
            form.append('image', file);

            return new Promise((resolve, reject) => {
                axios.post(url, form).then((data) => {
                    console.log(data);
                    resolve(data);
                }).catch((error) => {
                    console.error(error);
                    reject(error);
                });
            });

        },

        defaultUpload(id, file) {
            const url = `/api/v1/products/${id}/images`;

            const form = new FormData();
            form.append('image_url', file);
            
            return new Promise((resolve, reject) => {
                axios.post(url, form).then((data) => {
                    console.log(data);
                    resolve(data);
                }).catch((error) => {
                    console.error(error);
                    reject(error);
                });
            });
        },

        getLatestImage(id) {
            const url = `/api/v1/product-images/${id}/latest-image`;
            return new Promise((resolve, reject) => {
                axios.get(url).then((res) => {
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                })
            })
        },

        storeColor(id, colors) {
            const url = `/api/v1/products/${id}/color-variants`

            return new Promise((resolve, reject) => {
                axios.post(url, colors).then((data) => {
                    console.log(data);
                    resolve(data);
                }).catch((error) => {
                    console.error(error);
                    reject(error);
                });
            });

        },

        storeSize(id, sizes) {
            const url = `/api/v1/products/${id}/size-variants`

            return new Promise((resolve, reject) => {
                axios.post(url, sizes).then((data) => {
                    console.log(data);
                    resolve(data);
                }).catch((error) => {
                    console.error(error);
                    reject(error);
                });
            });

        },
    }
})