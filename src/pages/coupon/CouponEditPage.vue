<template>
    <CouponForm @add-coupon="onEditCoupon" :couponModel="coupon" />
</template>

<script>
import CouponForm from "./CouponForm.vue";
import {mapState} from 'pinia'
import {useRoute} from 'vue-router'
import {useCouponStore} from '@/stores/CouponStore.js'


export default {
    components: {
        CouponForm
    },

    data() {
        return {
            coupon: {},
            id: null
        }
    },

    methods: {
        fetchCoupon(id) {
            this.getCoupon(id).then((res) => {
                this.coupon = res.data;
            }).catch((err) => {
                console.error(err);
            })
        },

        onEditCoupon() {
            this.editCoupon(this.id, this.coupon).then((res) => {
                console.log('coupon edited');
                this.$router.push({name: 'coupon.index'});
            }).catch((err) => {
                console.error(err);
            })
        }
    },

    mounted() {
        this.id = useRoute().params.id;
        this.fetchCoupon(this.id);
    },

    computed: {
        ...mapState(useCouponStore, ['getCoupon', 'editCoupon']),
    }
}
</script>
