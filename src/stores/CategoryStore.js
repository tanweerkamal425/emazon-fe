import {axios} from '@/util/axios.js'
import {defineStore} from 'pinia'

export const useCategoryStore = defineStore("category", {
    state() {
        categories: []
    },

    actions: {
        getCategories(query) {
            let queryParams = new URLSearchParams(query);
            const url = '/api/v1/categories?' + queryParams.toString();

            return new Promise((resolve, reject) => {
                axios.get(url, query).then((res) => {
                    // console.log(res.data);
                    this.categories = res.data.data;
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        },

        getAllCategories() {
            const url = '/api/v1/categories/all';

            return new Promise((resolve, reject) => {
                axios.get(url).then((res) => {
                    // this.categories = res.data;
                    // console.log(res.data);
                    resolve(res);
                }).catch((err) => {
                    console.error(err);
                    reject(err);
                })
            })
        },

        getCategory(id) {
            const url = `/api/v1/categories/${id}`;
            return new Promise((resolve, reject) => {
                axios.get(url).then((res) => {
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                    // console.error(err);
                })
            })
        },

        addCategory(category) {
            const url = '/api/v1/categories';
            return new Promise((resolve, reject) => {
                axios.post(url, category).then((res) => {
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                })
            })
        },

        defaultUpload(id, file) {
            const url = `/api/v1/categories/${id}/images`;

            const form = new FormData();
            form.append('image_url', file);
            
            return new Promise((resolve, reject) => {
                axios.post(url, form).then((data) => {
                    resolve(data);
                }).catch((error) => {
                    console.error(error);
                    reject(error);
                });
            });
        },

        editCategory(id, category) {
            const url = `/api/v1/categories/${id}`;
            return new Promise((resolve, reject) => {
                axios.patch(url, category).then((res) => {
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                })
            })
        }
    }
})