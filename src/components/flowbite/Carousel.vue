<template>
    <fwb-carousel :pictures="pictures" slide />
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue'

const pictures = [
{src: 'https://tinyjpg.com/images/social/website.jpg', alt: 'Image 1'},
{src: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg', alt: 'Image 2'},
{src: 'https://fileinfo.com/img/ss/xl/jpg_44-2.jpg', alt: 'image 3'}
]
</script>