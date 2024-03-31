<template>
<section v-if="product" class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">Apple iMac 25"</h2>
            <h4 class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">Apple iMac 25"</h4>



            <div id="gallery" class="relative w-full" data-carousel="slide">
                <!-- Carousel wrapper -->
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <!-- Item 1 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
                    </div>
                    <!-- Item 2 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
                    </div>
                    <!-- Item 3 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
                    </div>
                    <!-- Item 4 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
                    </div>
                    <!-- Item 5 -->
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="">
                    </div>
                </div>
                <!-- Slider controls -->
                <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>

            <dl>
                <router-link :to="{name: 'product_image.store', params: {id: product.id}}" class="border-black border-2 mt-4 px-2 hover:text-blue-700 hover:border-blue-700">
                    Add image
                </router-link>
                <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white mt-4">Description</dt>
                <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.</dd>
            </dl>
            <p class="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white">$2999</p>
            <p class="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white">$3199</p>
            <dl class="flex items-center space-x-6">
                <div>
                    <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Category</dt>
                    <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Electronics/PC</dd>
                </div>
                <div>
                    <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Item weight</dt>
                    <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">12kg</dd>
                </div>
            </dl>
            <dl class="flex items-center space-x-6">
                <div>
                    <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Size</dt>
                    <div class="flex flex-row gap-x-2">
                        <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">S</dd>
                        <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">M</dd>
                        <router-link :to="{name: 'size.store'}" class="border-black border-2 mb-4 ml-8 px-2 hover:text-blue-700 hover:border-blue-700">
                            Add size
                        </router-link>
                    </div>


                </div>
                <div>
                    <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Color</dt>
                    <div class="flex flex-row gap-x-2">
                        <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Red</dd>
                        <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Green</dd>
                        <router-link :to="{name: 'color.store'}" class="border-black border-2 mb-4 ml-8 px-2 hover:text-blue-700 hover:border-blue-700">
                            Add color
                        </router-link>
                    </div>
                </div>
            </dl>
            <dl class="flex items-center space-x-6">
                <div>
                    <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Returnablie</dt>
                    <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">No</dd>
                </div>
                <div>
                    <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Published</dt>
                    <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Yes</dd>
                </div>
            </dl>
            <dl class="flex items-center space-x-6">
                <div>
                    <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Created at</dt>
                    <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">2024-03-13</dd>
                </div>
                <div>
                    <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Updated at</dt>
                    <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">2024-03-13</dd>
                </div>
                <div>
                    <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Published at</dt>
                    <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">2024-03-13</dd>
                </div>
            </dl>
            <div class="flex items-center space-x-4">
                <button type="button" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                    Edit
                </button>   
                <button type="button" class="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                    <svg aria-hidden="true" class="w-5 h-5 mr-1.5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                    Delete
                </button> 
            </div>
        </div>
</section>
</template>

<script setup>
import {onMounted} from 'vue'
import {initCarousels} from 'flowbite'
import { useProductStore } from '@/stores/ProductStore.js';
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const product = ref(null);

onMounted(() => {
    initCarousels();
    const route = useRoute();
    fetchProduct(route.params.id);
});

const fetchProduct = (id) => {
    useProductStore().getProduct(id).then((data) => {
        console.log(data);
        product.value = data.data;
    });
}

</script>