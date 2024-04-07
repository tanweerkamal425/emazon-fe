<template>
<div v-if="product" class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <td class="">
                    <img class="h-auto max-w-lg rounded-lg" :src="product.image_url" alt="image description">
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    ID
                </th>
                <td class="px-6 py-4">
                    {{ product.id }}
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Title
                </th>
                <td class="px-6 py-4">
                    {{ product.title }}
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Subtitle
                </th>
                <td class="px-6 py-4">
                    {{ product.subtitle }}
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Category
                </th>
                <td class="px-6 py-4">
                    {{ product.category.name }}
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Colors
                </th>
                <td class="px-6 py-4">
                    <form @submit.prevent="storeColors">
                    <div class="flex gap-x-4">
                            <div v-for="c in colors" :key="c.id">
                                <div class="flex items-center mb-4">
                                    <input name="colors" id="default-checkbox" type="checkbox" :value="c.id" v-model="checkedColors" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ c.color }}</label>
                                </div>
                            </div>
                        <Button name="Add" />
                        <!-- <Modal :color="colors" :colorsCheck="checkedColors" /> -->
                    </div>
                </form>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Sizes
                </th>
                <td class="px-6 py-4">
                    <form @submit.prevent="storeSizes">
                        <div class="flex items-center gap-x-4">
                            <div v-for="s in sizes" :key="s.id">
                                <div class="flex items-center mb-4">
                                    <input name="sizes" id="default-checkbox" type="checkbox" :value="s.id" v-model="checkedSizes" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ s.size }}</label>
                                </div>
                            </div>
                            <Button name="Add" />
                        </div>
                    </form>
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Description
                </th>
                <td class="px-6 py-4">
                    {{ product.description }}
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Status
                </th>
                <td class="px-6 py-4">
                    {{ product.price_mp }}
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    User ID
                </th>
                <td class="px-6 py-4">
                    {{ product.price_sp }}
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Code
                </th>
                <td class="px-6 py-4">
                    {{ product.code }}
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Published
                </th>
                <td class="px-6 py-4">
                    {{ product.is_published == 0 ? 'No' : 'Yes' }}
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Returnable
                </th>
                <td class="px-6 py-4">
                    {{ product.is_returnable == 0 ? 'No' : 'Yes' }}
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Created At
                </th>
                <td class="px-6 py-4">
                    {{ product.created_at }}
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Updated At
                </th>
                <td class="px-6 py-4">
                    {{ product.updated_at }}
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Published At
                </th>
                <td class="px-6 py-4">
                    {{ product.published_at }}
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>

import { useProductStore } from '@/stores/ProductStore.js';
import {useSizeStore} from '@/stores/SizeStore.js';
import {useColorStore} from '@/stores/ColorStore.js';
import { useRoute } from 'vue-router';
import { mapState } from 'pinia';
import Button from '../../components/flowbite/Button.vue'
import Modal from '../../components/Modal.vue'

export default {
    components: {
        Modal,
        Button,
    },
    data() {
        return {
            product: null,
            colors: [],
            sizes: [],
            images: [],
            checkedSizes: [],
            checkedColors: [],
            route: null,
        }
    },

    methods: {
        fetchProduct(id) {
            this.getProduct(id).then((data) => {
                this.product = data.product;
                this.checkedColors = data.colors.map((c) => c.id);
                this.checkedSizes = data.sizes.map((s) => s.id);
                this.images = data.images;
            }).catch((err) => {
                console.error(err);
            });
        },

        allSizes() {
            this.getAllSizes().then((res) => {
                this.sizes = res.data;
            }).catch((err) => {
                console.log(err);
            })
        },

        allColors() {
            this.getAllColors().then((res) => {
                this.colors = res.data;
            }).catch((err) => {
                console.log(err);
            })
        },

        storeColors() {
            console.log('clicked')
            this.storeColor(this.route.params.id, {colors: this.checkedColors}).then((res) => {
            }).catch((err) => {
                console.log(err);
            })
        },

        storeSizes() {
            console.log('clicked')
            this.storeSize(this.route.params.id, {sizes: this.checkedSizes}).then((res) => {
            }).catch((err) => {
                console.log(err);
            })
        }
    },

    mounted() {
        this.route = useRoute();
        this.fetchProduct(this.route.params.id);
        this.allSizes();
        this.allColors();
    },

    computed: {
        ...mapState(useProductStore, ["getProduct", "storeColor", "storeSize"]),
        ...mapState(useSizeStore, ["getAllSizes"]),
        ...mapState(useColorStore, ["getAllColors"]),
    }
}




;


</script>