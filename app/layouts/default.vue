<template>
    <div>
    <Header />
    <slot />
    <Footer v-if="!route.meta.hideFooter" />
  </div>
</template>
<script setup>
const route = useRoute()
</script>