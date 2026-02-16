<script setup>
import { useRouter } from "vue-router";
import { useOrderStore } from "@/stores/order";

import OrderTypeGrid from "@/components/welcome/OrderTypeGrid.vue";

const router = useRouter();
const order = useOrderStore();

function handleSelect(type) {
  order.setOrderType(type);
  router.push("/menu");
}
</script>

<template>
  <section class="mx-auto max-w-4xl">
    <div class="text-center mt-6">
      <h1 class="text-2xl md:text-3xl font-extrabold">¿Dónde desea disfrutar su comida?</h1>
      <p class="mt-2 text-sm text-text-muted">Seleccione una opción para comenzar su orden</p>
    </div>

    <OrderTypeGrid @select="handleSelect" />
  </section>
</template>
