<script setup>
import { useCartStore } from '@/stores/cart'
import { useCurrency } from '@/composables/useCurrency'

const cart = useCartStore()
const { mxn } = useCurrency()
</script>

<template>
  <div class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950/40">

    <div class="flex items-center justify-between text-sm">
      <span class="text-slate-600 dark:text-slate-300">Subtotal</span>
      <span class="font-bold text-slate-900 dark:text-slate-100">{{ mxn(cart.subtotal) }}</span>
    </div>

    <div class="mt-2 flex items-center justify-between text-sm">
      <span class="text-slate-600">IVA (16%)</span>
      <span class="font-bold text-slate-900">{{ mxn(cart.iva) }}</span>
    </div>

    <div class="mt-3 border-t border-slate-200 pt-3 flex items-center justify-between">
      <span class="text-base font-extrabold text-slate-900">Total</span>
      <span class="text-base font-extrabold text-slate-900">{{ mxn(cart.total) }}</span>
    </div>
  </div>
</template>
