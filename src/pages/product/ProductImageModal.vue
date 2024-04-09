<template>
    <button @click="showModal" class="plus-btn mb-4 mt-4" type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></svg>
    </button>

    <fwb-modal v-if="isShowModal" @close="closeModal">
        <template #header>
        <!-- <div class="flex items-center text-lg">
            Terms of Service
        </div> -->
        </template>
        <template #body>
        <!-- <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p> -->
        <ProductImageForm @file-select="onFileSelect" @upload-image="onUploadImage" />
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
import ProductImageForm from './ProductImageForm.vue'

export default {
    components: {
        FwbButton,
        FwbModal,
        ProductImageForm
    },

    data() {
        return {
            isShowModal: false
        }
    },

    methods: {
        closeModal () {
            this.isShowModal = false
        },

        showModal () {
            this.isShowModal = true
        },

        onUploadImage(isDefault) {
            this.$emit('upload-image', isDefault);
            this.isShowModal = false;
        },

        onFileSelect(file) {
            this.$emit('file-select', file);
        },
    },

    emits: ['file-select', 'upload-image'],
}
</script>