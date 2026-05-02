<script setup>
import QuantityStepper from './QuantityStepper.vue'
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useCurrency } from '@/composables/useCurrency'

const props = defineProps({
  product: { type: Object, required: true }, // { id, name, description, price, image, badge? }
})

const cart = useCartStore()
const { mxn } = useCurrency()

const qty = computed(() => cart.getQtyById(props.product.id))

function addOne() {
  cart.addItem(props.product)
}
function inc() {
  cart.increment(props.product.id)
}
function dec() {
  cart.decrement(props.product.id)
}
</script>

<template>
  <article
      class="grid h-full grid-rows-[160px_1fr_auto] overflow-hidden rounded-2xl
         border border-slate-200 bg-white shadow-sm transition hover:shadow-md
         dark:border-slate-800 dark:bg-slate-900/60"
  >
    <div class="relative overflow-hidden">
      <img
          v-if="product.image"
          :src="product.image"
          :alt="product.name"
          class="h-40 w-full object-cover"
      />
      <div
          v-else
          class="flex h-40 w-full items-center justify-center bg-slate-100 text-slate-400
           dark:bg-slate-800 dark:text-slate-400"
      >
        Sin imagen
      </div>

      <span
          v-if="product.badge"
          class="absolute left-3 top-3 rounded-full bg-slate-900/70 px-3 py-1 text-xs font-semibold text-white"
      >
    {{ product.badge }}
  </span>
    </div>

    <div class="p-4">
      <div class="flex items-start justify-between gap-3">
        <h3 class="text-base font-extrabold text-slate-900 leading-snug dark:text-slate-100">
        {{ product.name }}
        </h3>
        <p class="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
        {{ mxn(product.price) }}
        </p>
      </div>

      <p class="mt-2 line-clamp-2 text-sm text-slate-600">
        {{ product.description }}
      </p>

      <div class="mt-4">
        <button
            v-if="qty === 0"
            type="button"
            class="w-full rounded-xl bg-red-600 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-red-700"
            @click="addOne"
        >
          Agregar
        </button>

        <div v-else>
          <QuantityStepper :value="qty" @increment="inc" @decrement="dec" />
        </div>
      </div>
    </div>
  </article>
</template>
