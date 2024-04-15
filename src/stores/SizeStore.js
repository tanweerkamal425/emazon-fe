import {axios} from '@/util/axios.js'
import {defineStore} from 'pinia'

export const useSizeStore = defineStore("size", {
    state() {
        sizes: [];
    },

    actions: {
        getSizes(query) {
            let queryParams = new URLSearchParams(query);
            const url = '/api/v1/sizes?' + queryParams.toString();

            return new Promise((resolve, reject) => {
                axios.get(url, query).then((res) => {
                    // console.log(res.data);
                    this.sizes = res.data.data;
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        },

        getAllSizes() {
            const url = '/api/v1/sizes/all';
            return new Promise((resolve, reject) => {
                axios.get(url).then((res) => {
                    // console.log(res.data);
                    this.sizes = res.data.data;
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        },

        getSize(id) {
            const url = `/api/v1/sizes/${id}`;

            return new Promise((resolve, reject) => {
                axios.get(url).then((res) => {
                    resolve(res);
                }).catch((err => {
                    reject(err);
                }))
            })
        },

        addSize(size) {
            const url = '/api/v1/sizes';

            return new Promise((resolve, reject) => {
                axios.post(url, size).then((res) => {
                    resolve(res);
                }).catch((err => {
                    reject(err);
                }))
            })
        },

        editSize(id, size) {
            const url = `/api/v1/sizes/${id}`;

            return new Promise((resolve, reject) => {
                axios.patch(url, size).then((res) => {
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                })
            })
        }
    }
})