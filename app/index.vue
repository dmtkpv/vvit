<!--
    Styles
-->

<style lang="scss">

    html {
        height: 100%;
    }

    body {
        height: 100%;
        font-family: Arial, sans-serif;
        line-height: 1;
    }

    #app {
        height: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;

        h1 {
            font-size: 64px;
            margin: 0;
        }

        button {
            width: 120px;
            height: 80px;
            margin: 48px 0 112px 0;
        }

    }

</style>


<!--
    Template
-->

<template>
    <div id="app">
        <h1>{{ count }}</h1>
        <button @click="count++">Click</button>
    </div>
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