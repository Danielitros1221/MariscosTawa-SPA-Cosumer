<script setup>
import { useRouter } from "vue-router";
import { useOrderStore } from "@/stores/order";

import BrandHeader from "@/components/brand/BrandHeader.vue";
import FooterInfoBar from "@/components/shared/FooterInfoBar.vue";
import OrderTypeGrid from "@/components/welcome/OrderTypeGrid.vue";

const router = useRouter();
const order = useOrderStore();

function handleSelect(type) {
  order.setOrderType(type);
  router.push("/menu");
}
</script>

<template>
  <section class="relative min-h-[calc(100vh-2rem)] overflow-hidden">

    <!-- Content wrapper -->
    <div class="relative mx-auto max-w-5xl px-4 py-8">
      <!-- Main card/surface -->
      <div
          class="relative rounded-3xl border border-border bg-white/80 dark:bg-black/20
               shadow-[0_16px_60px_rgba(0,0,0,0.10)] backdrop-blur
               px-6 md:px-10 py-10"
      >

        <!-- Header pill -->
        <div class="flex justify-center">
          <div
              class="inline-flex items-center gap-3 rounded-full border border-border
                   bg-white/90 dark:bg-black/30 backdrop-blur
                   px-6 py-3 shadow-sm"
          >
            <BrandHeader />
          </div>
        </div>


        <!-- Question -->
        <div class="mt-14 text-center">
          <h1 class="text-2xl md:text-3xl font-extrabold text-text">
            ¿Dónde desea disfrutar su comida?
          </h1>
          <p class="mt-2 text-sm text-text-muted">
            Seleccione una opción para comenzar su orden
          </p>
        </div>

        <!-- Cards -->
        <div class="mt-10">
          <!-- OrderTypeGrid ya trae su grid -->
          <OrderTypeGrid @select="handleSelect" />
        </div>

        <!-- Soft bottom wave -->
        <div class="pointer-events-none absolute inset-x-0 bottom-0 h-28">
          <br>
          <div class="h-full w-full rounded-b-3xl bg-muted/30" />
        </div>

        <!-- Footer -->

        <div class="relative mt-16">
          <FooterInfoBar />
        </div>
      </div>
    </div>
  </section>
</template>
