import {axios} from '@/util/axios.js'
import {defineStore} from 'pinia'

export const useColorStore = defineStore("color", {
    state() {
        //
        color: []
    },

    actions: {
        getColors(query) {
            let queryParams = new URLSearchParams(query);
            const url = '/api/v1/colors?' +  queryParams.toString();

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
        },

        getColor(id) {
            const url = `/api/v1/colors/${id}`;

            return new Promise((resolve, reject) => {
                axios.get(url).then((res) => {
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        },

        addColor(color) {
            const url = '/api/v1/colors/';

            return new Promise((resolve, reject) => {
                axios.post(url, color).then((res) => {
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        },

        editColor(id, color) {
            const url = `/api/v1/colors/${id}`;

            return new Promise((resolve, reject) => {
                axios.patch(url, color).then((res) => {
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        }
    }
})