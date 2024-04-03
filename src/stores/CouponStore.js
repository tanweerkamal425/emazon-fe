import {axios} from '@/util/axios.js'
import {defineStore} from 'pinia'

export const useCouponStore = defineStore("coupon", {
    state() {
        //
        coupons: []
    },

    actions: {
        getCoupons(query) {
            const url = '/api/v1/coupons';

            return new Promise((resolve, reject) => {
                axios.get(url, query).then((res) => {
                    // console.log(res.data);
                    this.coupons = res.data.data;
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        }
    }
})