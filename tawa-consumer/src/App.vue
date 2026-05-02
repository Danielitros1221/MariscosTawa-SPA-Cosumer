<script setup>
import AppShellConsumer from "@/layouts/AppShellConsumer.vue";
</script>

<template>
  <AppShellConsumer :showSearch="false">
    <RouterView />
  </AppShellConsumer>
</template>
