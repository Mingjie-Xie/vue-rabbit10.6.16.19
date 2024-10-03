<script setup>

import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'

import '@/styles/common.scss'

import LayoutFixedVue from './components/LayoutFixed.vue'
</script>

<template>
    <LayoutFixedVue />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>