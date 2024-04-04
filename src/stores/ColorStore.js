import {axios} from '@/util/axios.js'
import {defineStore} from 'pinia'

export const useColorStore = defineStore("color", {
    state() {
        //
        color: []
    },

    actions: {
        getColors(query) {
            const url = '/api/v1/colors';

            return new Promise((resolve, reject) => {
                axios.get(url, query).then((res) => {
                    // console.log(res.data);
                    this.color = res.data.data;
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        },

        getAllColors(query) {
            const url = '/api/v1/colors/all';

            return new Promise((resolve, reject) => {
                axios.get(url).then((res) => {
                    // console.log(res.data);
                    this.color = res.data.data;
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        }
    }
})