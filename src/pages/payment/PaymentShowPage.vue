<template>
    <PaymentShowTable :payment="payment" />
    <UserShowTable :user="user" />
</template>

<script>
import { mapState } from 'pinia';
import { useRoute } from 'vue-router';
import {usePaymentStore} from '@/stores/PaymentStore'
import PaymentShowTable from './PaymentShowTable.vue';
import UserShowTable from '../user/UserShowTable.vue';

export default {
    components: {
        PaymentShowTable,
        UserShowTable
    },

    data() {
        return {
            payment: {},
            user: {}
        }
    },

    methods: {
        fetchPayment(id) {
            this.getPayment(id).then((res) => {
                this.payment = res.data.data;
                this.user = this.payment.user;
                console.log(this.payment.user);
            }).catch((err) => {
                console.error(err);
            })
        }
    },

    mounted() {
        const route = useRoute();
        this.fetchPayment(route.params.id);
    },

    computed: {
        ...mapState(usePaymentStore, ["getPayment"]),
    }
}
</script>