<script setup>
defineProps({
  value: { type: Number, default: 0 },
})
const emit = defineEmits(['increment', 'decrement'])
</script>

<template>
  <div class="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2
            dark:border-slate-800 dark:bg-slate-950/40">

    <button
        type="button"
        class="grid h-9 w-9 place-items-center rounded-lg bg-slate-100 text-slate-900 hover:bg-slate-200
               dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
        @click="emit('decrement')"
        aria-label="Disminuir"
    >
      −
    </button>

    <span class="text-sm font-extrabold text-slate-900">
      {{ value }}
    </span>

    <button
        type="button"
        class="grid h-9 w-9 place-items-center rounded-lg bg-red-600 text-white hover:bg-red-700"
        @click="emit('increment')"
        aria-label="Aumentar"
    >
      +
    </button>
  </div>
</template>
