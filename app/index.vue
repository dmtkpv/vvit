<!--
    Styles
-->

<style lang="scss">

</style>


<!--
    Template
-->

<template>
    <div>{{ count }}</div>
    <button @click="count++">Click</button>
</template>


<!--
    Scripts
-->

<script setup>

    import { ref, watch } from 'vue'

    const cached = +localStorage.getItem('count');
    const count = ref(cached || 0);

    watch(count, value => {
        localStorage.setItem('count', value)
    })


</script>