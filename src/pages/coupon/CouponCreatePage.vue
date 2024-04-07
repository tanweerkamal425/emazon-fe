<template>
    <CouponForm @add-coupon="onAddCoupon" :couponModel="coupon" />
</template>

<script>
import CouponForm from './CouponForm.vue'
import {mapState} from 'pinia'
import {useRoute} from 'vue-router'
import {useCouponStore} from '@/stores/CouponStore.js'

export default {
    components: {
        CouponForm
    },

    data() {
        return {
            coupon: {
                coupon: "",
                value: 0,
                is_active: ""
            }
        }
    },

    methods: {
        onAddCoupon() {
            this.addCoupon(this.coupon).then((res) => {
                console.log('coupon added');
                this.$router.push({name: 'coupon.index'});
            }).catch((err) => {
                console.error(err);
            })
        }
    },

    computed: {
        ...mapState(useCouponStore, ['addCoupon', 'editCoupon'])
    }


}
</script>
