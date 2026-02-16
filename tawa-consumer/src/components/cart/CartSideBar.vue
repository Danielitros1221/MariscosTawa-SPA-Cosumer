<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import CartItemRow from './CartItemRow.vue'
import CartTotals from './CartTotals.vue'

const props = defineProps({
  tableLabel: { type: String, default: 'Mesa #4' },
})

const router = useRouter()
const cart = useCartStore()
const hasItems = computed(() => cart.items.length > 0)

function goSummary() {
  router.push('/summary')
}
</script>

<template>
  <aside class="w-full lg:w-90 lg:sticky lg:top-6">
    <div class="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70">

      <div class="flex items-center justify-between border-b border-slate-200 px-4 py-4 dark:border-slate-800">
        <div>
          <h3 class="text-muted text-lg font-extrabold text-slate-900">Tu Carrito</h3>
          <p class="text-xs text-slate-500">{{ tableLabel }}</p>
        </div>

        <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700  dark:bg-slate-800 dark:text-slate-200">
          {{ cart.countItems }} items
        </span>
      </div>

      <div class="max-h-[46vh] overflow-auto px-4 py-4">
      <div v-if="!hasItems" class="rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          Aún no hay productos en el carrito.
        </div>

        <div v-else class="space-y-3">
          <CartItemRow
              v-for="it in cart.items"
              :key="it.id"
              :item="it"
              @increment="cart.increment(it.id)"
              @decrement="cart.decrement(it.id)"
              @remove="cart.remove(it.id)"
          />
        </div>
      </div>

      <div class="px-4 pb-4">
        <CartTotals />

        <button
            type="button"
            class="mt-4 w-full rounded-xl bg-red-600 px-4 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-red-700 disabled:opacity-50"
            :disabled="!hasItems"
            @click="goSummary"
        >
          Ver Resumen →
        </button>
      </div>
    </div>
  </aside>
</template>
