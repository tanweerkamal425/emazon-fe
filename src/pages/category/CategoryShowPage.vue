<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div>
            <fwb-img
            alt="flowbite-vue"
            :src="category.image_url"
            />
        </div>
        <DefaultCategoryImageModal @file-select="onFileSelect" @default-upload="onDefaultUpload" />
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <!-- <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead> -->
        <tbody>
            <!-- <tr class="border-b border-gray-200 dark:border-gray-700">
                <td class="">
                    <img class="h-auto max-w-lg rounded-lg" src="https://media.istockphoto.com/id/1302787124/photo/beige-leather-women-handbag-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=fOO0zCBqF3rbiGLLHwgtOMHxt66adpKikE7Fs2C_fDs=" alt="image description">
                </td>
            </tr> -->
            

            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    ID
                </th>
                <td class="px-6 py-4">
                    {{ category.id }}
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Name
                </th>
                <td class="px-6 py-4">
                    {{ category.name }}
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Parent ID
                </th>
                <td class="px-6 py-4">
                    {{ category.parent_id }}
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Created At
                </th>
                <td class="px-6 py-4">
                    {{ readableFormattedDate(category.created_at) }}
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Updated At
                </th>
                <td class="px-6 py-4">
                    {{ readableFormattedDate(category.updated_at) }}
                </td>
            </tr>
        </tbody>
    </table>
    </div>

    <!-- <ProductTable :products="products" /> -->
</template>

<script>
import { useRoute } from 'vue-router';
import {useCategoryStore} from '@/stores/CategoryStore'
import { mapState } from 'pinia';
import ProductTable from '../product/ProductTable.vue';
import DefaultCategoryImageModal from './DefaultCategoryImageModal.vue';
import { FwbImg } from 'flowbite-vue'

export default {
    components: {
        ProductTable,
        DefaultCategoryImageModal,
        FwbImg,
    },

    data() {
        return {
            category: {},
            products: [],
            file: null,
            image: null,
            route: null,
        }
    },

    methods: {
        fetchCategory(id) {
            this.getCategory(id).then((res) => {
                console.log(res.category);
                this.category = res.category;
                this.products = res.products;
            }).catch((err) => {
                console.error(err);
            })
        },

        onFileSelect(file) {
            this.file = file;
            console.log(file);
        },

        onDefaultUpload() {
            this.defaultUpload(this.route.params.id, this.file).then((res) => {
                console.log('success');
                console.log(res.data);
                this.category = res.data.data;
            }).catch((err) => {
                console.log(err);
            })
        }
    },

    mounted() {
        this.route = useRoute();
        this.fetchCategory(this.route.params.id);
    },

    computed: {
        ...mapState(useCategoryStore, ["getCategory", "defaultUpload"])
    }
}
</script>

