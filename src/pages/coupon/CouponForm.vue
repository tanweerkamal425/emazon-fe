<template>
    <div class="relative p-4 w-full max-w-xl h-auto md:h-auto mx-auto">
        <!-- Modal content -->
        <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <!-- Modal header -->
            <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Add Coupon
                </h3>
            </div>
            <!-- Modal body -->
            <form @submit.prevent="$emit('add-coupon')" action="#">
                <div class="grid gap-4 mb-4 sm:grid-cols-1">
                    <div>
                        <label for="coupon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Coupon</label>
                        <input type="text" v-model="couponModel.coupon" name="coupon" id="coupon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="e.g, MAR098" required="">
                    </div>
                    <div>
                        <label for="value" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Value</label>
                        <input type="number" v-model="couponModel.value" name="value" id="value" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required="">
                    </div>
                    <div>
                        <label for="is_active" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Active</label>
                        <select v-model="couponModel.is_active" id="is_active" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option disabled value="">Please select one</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                </div>
                <button type="submit" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Add new coupon
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        couponModel: Object
    }
}
</script>