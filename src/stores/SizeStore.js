import {axios} from '@/util/axios.js'
import {defineStore} from 'pinia'

export const useSizeStore = defineStore("size", {
    state() {
        sizes: [];
    },

    actions: {
        getSizes(query) {
            const url = '/api/v1/sizes';

            return new Promise((resolve, reject) => {
                axios.get(url, query).then((res) => {
                    // console.log(res.data);
                    this.sizes = res.data.data;
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        }
    }
})