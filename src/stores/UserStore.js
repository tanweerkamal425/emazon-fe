import {axios} from '@/util/axios.js'
import {defineStore} from 'pinia'

export const useUserStore = defineStore("user", {
    state() {
        //
        users: []
    },

    actions: {
        getUsers(query) {
            const url = '/api/v1/users';

            return new Promise((resolve, reject) => {
                axios.get(url, query).then((res) => {
                    // console.log(res.data);
                    this.users = res.data.data;
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        },

        getUser(id) {
            const url = `/api/v1/users/${id}`;

            return new Promise((resolve, reject) => {
                axios.get(url).then((res) => {
                    // console.log(res.data);
                    // this.users = res.data.data;
                    resolve(res.data);
                }).catch((err) => {
                    reject(err);
                })
            });
        }
    }
})