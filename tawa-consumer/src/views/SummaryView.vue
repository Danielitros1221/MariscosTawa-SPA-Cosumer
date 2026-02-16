<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div class="lg:col-span-2 card p-6">
      <h1 class="text-xl font-extrabold">Resumen del Pedido</h1>
      <p class="text-sm text-text-muted mt-1">Placeholder (Fase 0): lista de artículos + notas + qty</p>

      <div class="mt-6 card p-4 bg-muted">
        <div class="text-sm text-text-muted">Aquí irá la lista del pedido.</div>
      </div>

      <button class="mt-6 text-sm underline" @click="router.push('/menu')">
        ← Volver al Menú
      </button>
    </div>

    <aside class="card p-6">
      <h2 class="text-lg font-bold">Total a Pagar</h2>
      <div class="mt-4 space-y-2 text-sm">
        <div class="flex justify-between"><span class="text-text-muted">Subtotal</span><span>$0.00</span></div>
        <div class="flex justify-between"><span class="text-text-muted">IVA (16%)</span><span>$0.00</span></div>
        <div class="flex justify-between font-extrabold text-base"><span>Total</span><span class="text-primary">$0.00</span></div>
      </div>

      <button class="btn-primary w-full mt-6 py-3 font-semibold" @click="router.push('/end')">
        Seleccionar método de pago
      </button>
    </aside>
  </section>
</template>
