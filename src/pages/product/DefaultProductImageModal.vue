<template>
    <fwb-button @click="showModal" class="mb-4 mt-4">
        Upload
    </fwb-button>
    <fwb-modal v-if="isShowModal" @close="closeModal">
        <template #header>
        <!-- <div class="flex items-center text-lg">
            Terms of Service
        </div> -->
        </template>
        <template #body>
            <div class="relative p-4 w-full max-w-xl h-auto md:h-auto">
                <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Add Image
                        </h3>
                    </div>
                    <!-- Modal body -->
                    <form @submit.prevent="onDefaultUpload" action="#">
                        <div class="grid gap-4 mb-4 sm:grid-cols-1">
                            <div>
                                <label for="image_url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                                <input @change="onFileSelect" type="file" name="image_url" id="image_url" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter image URL" required="">
                            </div>
                            <div>
                                <label for="is_default" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default</label>
                                <select v-model="isDefault" id="is_default" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                            Add new image
                        </button>
                    </form>
                </div>
            </div>
        </template>
        <template #footer>
        <div class="flex justify-between">
            <!-- <fwb-button @click="closeModal" color="alternative">
            Decline
            </fwb-button>
            <fwb-button @click="closeModal" color="green">
                Upload
            </fwb-button> -->
        </div>
        </template>
    </fwb-modal>
</template>

<script>
import { FwbButton, FwbModal } from 'flowbite-vue'

export default {
    components: {
        FwbButton,
        FwbModal,
    },

    data() {
        return {
            isShowModal: false,
        }
    },

    methods: {
        closeModal () {
            this.isShowModal = false
        },

        showModal () {
            this.isShowModal = true
        },

        onDefaultUpload() {
            this.$emit('default-upload');
            this.isShowModal = false;
        },

        onFileSelect(event) {
            const file = event.target.files[0];
            this.$emit('file-select', file);
        },
    },

    emits: ['default-upload', 'file-select'],
}
</script>