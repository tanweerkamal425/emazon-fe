import {axios} from '@/util/axios.js'
import {defineStore} from 'pinia'

export const useCouponStore = defineStore("coupon", {
    state() {
        //
        coupons: []
    },

    actions: {
        getCoupons(query) {
            let queryParams = new URLSearchParams(query);
            const url = '/api/v1/coupons?' + queryParams.toString();

            return new Promise((resolve, reject) => {
                axios.get(url, query).then((res) => {
                    // console.log(res.data);
                    this.coupons = res.data.data;
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        },

        getCoupon(id) {
            const url = `/api/v1/coupons/${id}`;

            return new Promise((resolve, reject) => {
                axios.get(url).then((res) => {
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        },

        addCoupon(coupon) {
            const url = '/api/v1/coupons/';

            return new Promise((resolve, reject) => {
                axios.post(url, coupon).then((res) => {
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                })
            });
        },

        editCoupon(id, coupon) {
            const url = `/api/v1/coupons/${id}`;

            return new Promise((resolve, reject) => {
                axios.patch(url, coupon).then((res) => {
                    resolve(res);
                }).catch((err) => {
                    reject(err);
                })
            });
        }
    }
})