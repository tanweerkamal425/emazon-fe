import {axios} from '@/util/axios.js'
import {defineStore} from 'pinia'

export const useCategoryStore = defineStore("category", {
    state() {
        //
        categories: []
    },

    actions: {
        getCategories(query) {
            const url = '/api/v1/categories';

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
        }
    }
})