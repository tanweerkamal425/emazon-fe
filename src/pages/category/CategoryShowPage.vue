<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <td class="">
                    <img class="h-auto max-w-lg rounded-lg" src="https://media.istockphoto.com/id/1302787124/photo/beige-leather-women-handbag-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=fOO0zCBqF3rbiGLLHwgtOMHxt66adpKikE7Fs2C_fDs=" alt="image description">
                </td>
            </tr>
            

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
                    {{ category.created_at }}
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Updated At
                </th>
                <td class="px-6 py-4">
                    {{ category.updated_at }}
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import { useRoute } from 'vue-router';
import {useCategoryStore} from '@/stores/CategoryStore'
import { mapState } from 'pinia';

export default {
    data() {
        return {
            category: {}
        }
    },

    methods: {
        fetchCategory(id) {
            this.getCategory(id).then((res) => {
                this.category = res.data;
                console.log(this.category);
            }).catch((err) => {
                console.error(err);
            })
        }
    },

    mounted() {
        const route = useRoute();
        this.fetchCategory(route.params.id);
    },

    computed: {
        ...mapState(useCategoryStore, ["getCategory"])
    }
}
</script>

