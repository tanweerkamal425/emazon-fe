<template>
    <UserShowTable :user="user" />
</template>

<script>
import { mapState } from 'pinia';
import { useRoute } from 'vue-router';
import {useUserStore} from '@/stores/UserStore.js'
import UserShowTable from './UserShowTable.vue';

export default {
    components: {
        UserShowTable,
    },

    data() {
        return {
            user: {}
        }
    },

    methods: {
        fetchUser(id) {
            this.getUser(id).then((res) => {
                this.user = res.data;
                console.log(res.data);
            }).catch((err) => {
                console.error(err);
            })
        }
    },

    mounted() {
        const route = useRoute();
        this.fetchUser(route.params.id);
    },

    computed: {
        ...mapState(useUserStore, ["getUser"]),
    }
}
</script>