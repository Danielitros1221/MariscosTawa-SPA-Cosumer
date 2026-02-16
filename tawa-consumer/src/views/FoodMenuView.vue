<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <section class="card p-6">
    <div class="flex items-center justify-between gap-4">
      <div>
        <h1 class="text-xl font-extrabold">Menú</h1>
        <p class="text-sm text-text-muted">Placeholder (Fase 0): aquí irá el menú + carrito</p>
      </div>

      <button class="btn-primary px-5 py-2 text-sm" @click="router.push('/summary')">
        Ir a Resumen →
      </button>
    </div>

    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="card p-4 bg-muted">
        <div class="font-semibold">Grid de productos</div>
        <div class="text-sm text-text-muted mt-1">Cards, categorías, etc.</div>
      </div>
      <div class="card p-4 bg-muted">
        <div class="font-semibold">Categorías / Tabs</div>
        <div class="text-sm text-text-muted mt-1">Platillos, Bebidas, Caldos…</div>
      </div>
      <div class="card p-4 bg-muted">
        <div class="font-semibold">Sidebar Carrito</div>
        <div class="text-sm text-text-muted mt-1">Items + total + CTA</div>
      </div>
    </div>
  </section>
</template>
