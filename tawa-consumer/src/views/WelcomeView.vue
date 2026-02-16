<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <section class="mx-auto max-w-4xl">
    <div class="text-center mt-6">
      <h1 class="text-2xl md:text-3xl font-extrabold">¿Dónde desea disfrutar su comida?</h1>
      <p class="mt-2 text-sm text-text-muted">Seleccione una opción para comenzar su orden</p>
    </div>

    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      <button
          class="card p-8 text-left hover:brightness-95 active:scale-[0.99] transition"
          @click="router.push('/menu')"
      >
        <div class="h-14 w-14 rounded-full bg-blue-100 dark:bg-blue-500/20 grid place-items-center mb-4">
          <span class="text-2xl">🍽️</span>
        </div>

        <div class="text-xl font-bold">Comer Aquí</div>
        <div class="text-sm text-text-muted mt-1">Disfrute en nuestras mesas</div>
      </button>

      <button
          class="card p-8 text-left hover:brightness-95 active:scale-[0.99] transition"
          @click="router.push('/menu')"
      >
        <div class="h-14 w-14 rounded-full bg-rose-100 dark:bg-rose-500/20 grid place-items-center mb-4">
          <span class="text-2xl">🛍️</span>
        </div>
        <div class="text-xl font-bold">Para Llevar</div>
        <div class="text-sm text-text-muted mt-1">Listo para llevar a casa</div>
      </button>
    </div>
  </section>
</template>
