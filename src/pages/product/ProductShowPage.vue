<template>
<div v-if="product" class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div>
        <fwb-img
        alt="flowbite-vue"
        :src="product.image_url"
        />
    </div>
    <DefaultProductImageModal @default-upload="onDefaultUpload" @file-select="onFileSelect" />
    <Gallery :imageArr="images" />
    <ProductImageModal @upload-image="onUploadImage" @file-select="onFileSelect" />
    <!-- <div v-show="showForm">
        <ProductImageForm @upload-image="onUploadImage" @file-select="onFileSelect" @close-form="onCloseForm" />
    </div>
    <div v-show="showButton">
        <button @click="onShowForm" class="plus-btn" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></svg>
        </button>
    </div> -->
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
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
                    {{ readableFormattedDate(product.created_at) }}
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Updated At
                </th>
                <td class="px-6 py-4">
                    {{ readableFormattedDate(product.updated_at) }}
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Published At
                </th>
                <td class="px-6 py-4">
                    {{ readableFormattedDate(product.published_at) }}
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
import Gallery from '@/components/flowbite/Gallery.vue'
import ProductImageForm from './ProductImageForm.vue';
import { FwbImg } from 'flowbite-vue'
import ProductImageModal from './ProductImageModal.vue';
import DefaultProductImageModal from './DefaultProductImageModal.vue';

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    components: {
        Modal,
        Button,
        Gallery,
        ProductImageForm,
        FwbImg,
        ProductImageModal,
        DefaultProductImageModal,
    },
    data() {
        return {
            product: null,
            colors: [],
            sizes: [],
            images: [],
            image: {},
            checkedSizes: [],
            checkedColors: [],
            route: null,
            showForm: false,
            showButton: true,
            file: null
        }
    },

    methods: {
        fetchProduct(id) {
            this.getProduct(id).then((data) => {
                this.product = data.product;
                console.log(data);
                this.checkedColors = data.colors.map((c) => c.id);
                this.checkedSizes = data.sizes.map((s) => s.id);
                this.images = data.images;
                console.log(this.images);
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
            this.storeColor(this.route.params.id, {colors: this.checkedColors}).then((res) => {
                toast.success("Colors added successfully !", {
                    position: toast.POSITION.TOP_CENTER,
                });
            }).catch((err) => {
                console.log(err);
                toast.error("Sorry, failed to add colors !", {
                    position: toast.POSITION.TOP_LEFT,
                });
            })
        },

        storeSizes() {
            this.storeSize(this.route.params.id, {sizes: this.checkedSizes}).then((res) => {
                toast.success("Sizes added successfully !", {
                    position: toast.POSITION.TOP_CENTER,
                });
            }).catch((err) => {
                console.log(err);
                toast.error("Sorry, failed to add sizes !", {
                    position: toast.POSITION.TOP_LEFT,
                });
            })
        },

        onShowForm() {
            this.showForm = true;
            this.showButton = false;
        },

        onCloseForm() {
            this.showForm = false;
            this.showButton = true;
        },

        onUploadImage(isDefault) {
            this.uploadImage(this.route.params.id, this.file).then((data) => {
                this.getLatestImage(this.route.params.id).then((res) => {
                    this.image = res.data.data;
                    this.images = [...this.images, this.image];
                    toast.success("Image uploaded successfully !", {
                        position: toast.POSITION.TOP_CENTER,
                    });
                }).catch((err) => {
                    console.log(err);
                })
            }).catch((error) => {
                console.error(error);
                toast.error("Sorry, failed to upload image !", {
                    position: toast.POSITION.TOP_LEFT,
                });
            }) 
        },

        onDefaultUpload() {
            this.defaultUpload(this.route.params.id, this.file).then((res) => {
                this.getProduct(this.route.params.id).then((res) => {
                    this.image = res.product.image_url;
                    this.product.image_url = this.image;
                    toast.success("Default image uploaded successfully !", {
                        position: toast.POSITION.TOP_CENTER,
                    });
                })
            }).catch((err) => {
                console.log(err);
                toast.error("Sorry, failed to upload image !", {
                    position: toast.POSITION.TOP_LEFT,
                });
            })
        },  

        onFileSelect(file) {
            this.file = file;
            console.log(file);

        }
    },

    mounted() {
        this.route = useRoute();
        this.fetchProduct(this.route.params.id);
        this.allSizes();
        this.allColors();
    },

    computed: {
        ...mapState(useProductStore, ["getProduct", "storeColor", "storeSize", "uploadImage", "getLatestImage", "defaultUpload"]),
        ...mapState(useSizeStore, ["getAllSizes"]),
        ...mapState(useColorStore, ["getAllColors"]),
    },
}
</script>

<style>
.plus-btn {
    width: 50px;
    height: 50px;
}

.form {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 8px 12px;
} 

.close-btn {
    width: 20px;
    height: 20px;
    align-self: flex-end;
}

.close-btn:hover {
    color: red;
}
</style>