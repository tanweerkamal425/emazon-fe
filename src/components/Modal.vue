<template>
    <fwb-button @click="showModal">
      Open modal
    </fwb-button>
  
    <fwb-modal v-if="isShowModal" @close="closeModal">
      <template #header>
        <div class="flex items-center text-lg">
          Color Palette
        </div>
      </template>
      <template #body>
        <!-- <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
        </p> -->
        <form @submit.prevent="onSelectColors">
        <div class="flex flex-wrap gap-x-4">
            <div v-for="c in color" :key="c.id">
                <div class="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" name="colors" :value="c.id" v-model="checkedColors" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ c.color }}</label>
                    <div class="w-6 h-3 ml-4" :style="{backgroundColor: '#' + c.code}"></div>
                </div>
            </div>
        </div>
      </form>
      </template>
      <template #footer>
        <div class="flex justify-between">
          <!-- <fwb-button @click="closeModal" color="alternative">
            Decline
          </fwb-button> -->
          <fwb-button @click="closeModal" color="blue">
            Add
          </fwb-button>
        </div>
      </template>
    </fwb-modal>
  </template>
  
  <script>
  import { FwbButton, FwbModal, FwbCheckbox } from 'flowbite-vue'

export default {
    props: {
        color: Array,
        colorsCheck: Array,
    },

    components: {
        FwbButton,
        FwbModal,
        FwbCheckbox
    },

    data() {
        return {
            isShowModal: false,
            checkedColors: []
        }
    },

    methods: {
        closeModal () {
            this.isShowModal = false
        },
        showModal () {
            this.isShowModal = true
            this.checkedColors = this.colorsCheck
        },

        onSelectColors() {
          console.log('colors checked');
        }
    },
}
</script>