import {axios} from '@/util/axios.js'
import {defineStore} from 'pinia'

export const useDashboardStore = defineStore('dashboard', {
    state() {

    },

    actions: {
        getDashboardDetails() {
            const url = '/api/v1/dashboard';
            
            return new Promise((resolve, reject) => {
                axios.get(url).then((res) => {
                    resolve(res.data);
                }).catch((err) => {
                    console.log(err);
                    reject(err);
                })
            })
        }
    }
})