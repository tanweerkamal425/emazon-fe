<template>
    <CategoryForm name="Edit Category" @add-category="onEditCategory" :categoryModel="category"  />
</template>

<script>
import { useRoute } from 'vue-router'
import CategoryForm from './CategoryForm.vue'
import {mapState} from 'pinia'
import { useCategoryStore } from '../../stores/CategoryStore'

export default {
    components: {
        CategoryForm
    },

    data() {
        return {
            category: {},
            route: null
        }
    },

    methods: {
        fetchCategory(id) {
            this.getCategory(id).then((res) => {
                this.category = res.category;
                console.log(res);
            }).catch((err) => {
                console.error(err);
            })
        },

        onEditCategory() {
            this.editCategory(this.route.params.id, this.category).then((res) => {
                console.log('category edited');
                this.$router.push({name: 'category.index'});
            }).catch((err) => {
                console.error(err);
            })
        }
    },

    mounted() {
        this.route = useRoute();
        this.fetchCategory(useRoute().params.id);
    },

    computed: {
        ...mapState(useCategoryStore, ['getCategory', 'editCategory']),
    }
}
</script>
