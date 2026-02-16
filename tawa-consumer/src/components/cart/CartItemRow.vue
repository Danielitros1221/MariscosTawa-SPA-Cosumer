<script setup>
import QuantityStepper from '@/components/menu/QuantityStepper.vue'
import { useCurrency } from '@/composables/useCurrency'

const props = defineProps({
  item: { type: Object, required: true }, // { id, name, price, image, qty, notes }
})

const emit = defineEmits(['increment', 'decrement', 'remove'])

const { mxn } = useCurrency()
</script>

<template>
  <div class="flex gap-3 rounded-xl border border-slate-200 bg-white p-3">
    <img
        v-if="item.image"
        :src="item.image"
        :alt="item.name"
        class="h-14 w-14 rounded-lg object-cover"
    />
    <div v-else class="grid h-14 w-14 place-items-center rounded-lg bg-slate-100 text-slate-400 text-xs">
      Img
    </div>

    <div class="min-w-0 flex-1">
      <div class="flex items-start justify-between gap-2">
        <div class="min-w-0">
          <p class="truncate text-sm font-extrabold text-slate-900">{{ item.name }}</p>
          <p class="text-xs text-slate-500">{{ mxn(item.price) }}</p>
        </div>

        <button
            type="button"
            class="rounded-lg px-2 py-1 text-xs font-bold text-slate-500 hover:bg-slate-100"
            @click="emit('remove')"
        >
          Quitar
        </button>
      </div>

      <div class="mt-2">
        <QuantityStepper
            :value="item.qty"
            @increment="emit('increment')"
            @decrement="emit('decrement')"
        />
      </div>
    </div>
  </div>
</template>
