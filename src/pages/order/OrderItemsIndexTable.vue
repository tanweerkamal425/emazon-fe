<template>
    <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <div class="mx-auto max-w-screen-xl px-4 lg:px-12 h-auto">
            <h1 class="text-2xl mb-4">Order Items</h1>
            <!-- Start coding here -->
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <!-- <div class="w-full md:w-1/3">
                        <form class="flex items-center">
                            <label for="simple-search" class="sr-only">Search</label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input @input="onInput" name="search" type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="">
                            </div>
                        </form>
                    </div> -->
                    <!-- <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        <select @input="onSelected" id="isActive" name="isActive" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Choose one</option>
                        <option value="1">Inactive</option>
                        <option value="2">Active</option>
                    </select>
                    </div> -->
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-4 py-3">ID</th>
                                <th scope="col" class="px-4 py-3">Order ID</th>
                                <th scope="col" class="px-4 py-3">User ID</th>
                                <th scope="col" class="px-4 py-3">Product ID</th>
                                <th scope="col" class="px-4 py-3">Quantity</th>
                                <th scope="col" class="px-4 py-3">Selling Price</th>
                                <th scope="col" class="px-4 py-3">Marked Price</th>
                                <th scope="col" class="px-4 py-3">Discount</th>
                                <th scope="col" class="px-4 py-3">Status</th>
                                <th scope="col" class="px-4 py-3">Created at</th>
                                <th scope="col" class="px-4 py-3">
                                    <span class="sr-only">Actions</span>
                                </th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            <template v-for="oi in orderItems" :key="oi.id">
                                <tr class="border-b dark:border-gray-700">
                                    <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{oi.order_id}}</th>
                                    <td class="px-4 py-3">{{ oi.user_id }}</td>
                                    <td class="px-4 py-3">{{ oi.product_id }}</td>
                                    <td class="px-4 py-3">{{ oi.qty }}</td>
                                    <td class="px-4 py-3">{{ Number(oi.price_sp).toLocaleString() }}</td>
                                    <td class="px-4 py-3">{{ Number(oi.price_mp).toLocaleString() }}</td>
                                    <td class="px-4 py-3">{{ oi.discount }}</td>
                                    <td class="px-4 py-3" :class="[oi.status == 1 ? 'active' : 'inactive']">{{ oi.status == 0 ? 'Inactive' : 'Active' }}</td>
                                    <td class="px-4 py-3">{{ readableFormattedDate(oi.created_at) }}</td>
                                    <td class="px-4 py-3 flex items-center justify-end">
                                        <div class="flex flex-row">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200 flex flex-row" aria-labelledby="apple-imac-27-dropdown-button">
                                                <li>
                                                    <router-link :to="{name: 'payment.show', params: {id: oi.id}}" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                                        <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                                        </svg>
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <Pagination @page-change="onPageChange" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        orderItems: Array,
    }
}
</script>

<style>
.active {
    color: green;
}

.inactive {
    color: red;
}
</style>