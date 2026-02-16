<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <section class="mx-auto max-w-xl">
    <div class="card p-8 text-center">
      <div class="h-14 w-14 rounded-full bg-green-100 dark:bg-green-500/20 grid place-items-center mx-auto">
        <span class="text-2xl">✅</span>
      </div>

      <h1 class="mt-4 text-2xl font-extrabold">¡Orden Recibida!</h1>
      <p class="mt-2 text-sm text-text-muted">Gracias por su preferencia. Su orden está siendo preparada.</p>

      <div class="mt-6 border border-dashed border-border rounded-2xl py-6">
        <div class="text-xs text-text-muted tracking-[0.2em] uppercase">Número de orden</div>
        <div class="mt-2 text-5xl font-extrabold text-primary">#042</div>
      </div>

      <button class="btn-primary w-full mt-6 py-3 font-semibold" @click="router.push('/welcome')">
        Finalizar →
      </button>
    </div>
  </section>
</template>
