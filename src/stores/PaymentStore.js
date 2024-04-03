import {axios} from '@/util/axios.js'
import {defineStore} from 'pinia'

export const usePaymentStore = defineStore("payment", {
    state() {
        //
        payments: []
    },

    actions: {
        getPayments(query) {
            const url = '/api/v1/payments';

            return new Promise((resolve, reject) => {
                axios.get(url, query).then((res) => {
                    // console.log(res.data);
                    this.payments = res.data.data;
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        }
    }
})