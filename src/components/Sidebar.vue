<script setup lang="ts">
</script>

<template>
    <div class="sidebar">
        <div class="sidebar__close"></div>
        <div class="sidebar__logo"></div>
        <div class="sidebar__items">
            <div class="sidebar__item">Валюты</div>
            <div class="sidebar__item">Погода</div>
        <!-- <div class="sidebar__item">Золото</div>-->
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    width: 370px;
    height: 100vh;
    padding: 30px;
    box-shadow: 1px 4px 15px 1px rgba(30, 31, 38, 0.25);
}
.sidebar__close {}
.sidebar__logo {
    width: 300px;
    height: 100px;
    position: relative;
    margin: 0 0 50px 0;
}
.sidebar__logo:before {
    position: absolute;
    content: '';
    background-image: url(../components/icons/logo.png);
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background-size: 80%;
}
.sidebar__items {
    text-align: center;
}
.sidebar__item {
    margin: 0 0 25px 0;
    color: #D0E1F9;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-weight: 400;
    cursor: pointer;
}
.sidebar__item:last-child {
    margin: 0 0 0 0;
}
</style>
