<template>
  <Custom404 />
</template>
<script setup>
import Custom404 from '/pages/404.vue'
// Set the HTTP status code to 404 (only on the server)
if (process.server) {
  const event = useRequestEvent()
  event.node.res.statusCode = 404
}
</script>