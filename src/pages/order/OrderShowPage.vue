<template>
    
<OrderShowTable :order="order" />
<UserShowTable :user="user" />
<orderItemsIndexTable :orderItems="orderItems"/>

</template>

<script>
import { mapState } from 'pinia';
import { useRoute } from 'vue-router';
import {useOrderStore} from '@/stores/OrderStore.js';
import OrderShowTable from './OrderShowTable.vue';
import UserShowTable from '../user/UserShowTable.vue';
import OrderItemsIndexTable from './OrderItemsIndexTable.vue';

export default {
    components: {
        OrderShowTable,
        UserShowTable,
        OrderItemsIndexTable
    },

    data() {
        return {
            order: {},
            user: {},
            orderItems: []
        }
    },

    methods: {
        fetchOrder(id) {
            this.getOrder(id).then((res) => {
                this.order = res.data.order;
                this.user = res.data.user;
                this.orderItems = res.data.order_items;
                console.log(res.data);
            }).catch((err) => {
                console.error(err);
            })
        }
    },

    mounted() {
        const route = useRoute();
        this.fetchOrder(route.params.id);
    },

    computed: {
        ...mapState(useOrderStore, ["getOrder"]),
    }
}
</script>