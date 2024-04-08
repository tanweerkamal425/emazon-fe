<template>
<div class="grid grid-cols-2 md:grid-cols-6 gap-4">
    <div v-for="image in imageArr" :key="image.id">
        <img class="h-auto max-w-full rounded-lg" :src="image.image" alt="">
    </div>
</div>

</template>

<script>
export default {
    props: {
        imageArr: Array
    }
}
</script>