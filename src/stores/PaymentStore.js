import {axios} from '@/util/axios.js'
import {defineStore} from 'pinia'

export const usePaymentStore = defineStore("payment", {
    state() {
        //
        payments: []
    },

    actions: {
        getPayments(query) {
            let queryParams = new URLSearchParams(query);
            const url = '/api/v1/payments?' + queryParams.toString();

            return new Promise((resolve, reject) => {
                axios.get(url, query).then((res) => {
                    // console.log(res.data);
                    this.payments = res.data.data;
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        },

        getPayment(id) {
            const url = `/api/v1/payments/${id}`;

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