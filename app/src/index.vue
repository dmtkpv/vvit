<!--
    Styles
-->

<style lang="scss">

//    html {
//        height: 100%;
//    }
//
//    body {
//        height: 100%;
//        font-family: Arial, sans-serif;
//        line-height: 1;
//        background: #111;
//    }
//
//    #app {

//
//        h1 {
//            font-size: 32px;
//            margin: 0;
//            font-weight: normal;
//            color: #CCC;
//        }
//
//        button {
//            width: 120px;
//            height: 80px;
//        }
//
//        .button {
//
//            margin: 32px 0 64px 0;
//            position: relative;
//            width: 267px;
//            height: 168px;
//            border-radius: 24px;
//            overflow: hidden;
//
//            img {
//                position: absolute;
//                top: 0;
//                left: 0;
//                width: 100%;
//                height: 100%;
//                opacity: 0;
//
//                &.active {
//                    opacity: 1;
//                }
//
//            }
//
//
//
//        }
//
//    }

    #app {

        $font: 28px;
        $space: 24px;

        height: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;

        h1 {
            font-family: 'Jura', sans-serif;
            font-size: $font;
            font-weight: 300;
            line-height: 1;
            color: #F4D27D;
        }

        a {
            width: 160px;
            margin: $space 0 calc($font + $space) 0;
            img {
                width: 100%;
                pointer-events: none;
            }
            &:active img {
                -webkit-filter: drop-shadow(0 0 8px #9E7028);
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

        <a @touchend="click">
            <img src="/btn.png">
        </a>

    </div>
</template>


<!--
    Scripts
-->

<script setup>

    import { ref, watch } from 'vue'

    const cached = +localStorage.getItem('count');
    const count = ref(cached || 0);

    function click () {
        count.value++;
        localStorage.setItem('count', count.value);
    }

</script>