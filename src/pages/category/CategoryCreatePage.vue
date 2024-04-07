<template>
    <CategoryForm @add-category="onAddCategory" :categoryModel="category" />
</template>

<script>
import {CategoryModel} from '@/models/CategoryModel.js'
import CategoryForm from './CategoryForm.vue';
import { useCategoryStore } from '../../stores/CategoryStore';
import { mapState } from 'pinia';

export default {
    components: {
        CategoryForm
    },

    data() {
        return {
            category: {...CategoryModel}
        }
    },

    methods: {
        onAddCategory() {
            this.addCategory(this.category).then((res) => {
                console.log('category added successfully');
                this.$router.push({name: 'category.index'})
            }).catch((err) => {
                console.error(err);
            })
        }
    },

    computed: {
        ...mapState(useCategoryStore, ["addCategory"]),
    }
}
</script>
