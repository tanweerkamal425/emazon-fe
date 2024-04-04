import {axios} from '@/util/axios.js'
import {defineStore} from 'pinia'

export const useOrderStore = defineStore("order", {
    state() {
        //
        orders: []
    },

    actions: {
        getOrders(query) {
            const url = '/api/v1/orders';

            return new Promise((resolve, reject) => {
                axios.get(url, query).then((res) => {
                    // console.log(res.data);
                    this.orders = res.data.data;
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        },

        getOrder(id) {
            const url = `/api/v1/orders/${id}`;

            return new Promise((resolve, reject) => {
                axios.get(url).then((res) => {
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                })
            })
        }
    }
})