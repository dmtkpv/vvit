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
        background: #111;
    }

    #app {
        height: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;

        h1 {
            font-size: 32px;
            margin: 0;
            font-weight: normal;
            color: #CCC;
        }

        button {
            width: 120px;
            height: 80px;
        }

        .button {

            margin: 32px 0 64px 0;
            position: relative;
            width: 267px;
            height: 168px;
            border-radius: 24px;
            overflow: hidden;

            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;

                &.active {
                    opacity: 1;
                }

            }



        }

    }

</style>


<!--
    Template
-->

<template>
    <div id="app">
        <h1>{{ count }}</h1>

        <div class="button" @click="click">
            <template v-for="n in frames">
                <img :class="{ active: n === frame + 1 }" :src="`/gif/${n}.png`">
            </template>
        </div>

    </div>
</template>


<!--
    Scripts
-->

<script setup>

    import { ref, watch } from 'vue'

    const cached = +localStorage.getItem('count');
    const count = ref(cached || 0);
    const frame = ref(1);
    const frames = 6;

    function click () {
        count.value++;
        localStorage.setItem('count', count.value);
        frame.value++;
        frame.value %= frames;
    }

</script>