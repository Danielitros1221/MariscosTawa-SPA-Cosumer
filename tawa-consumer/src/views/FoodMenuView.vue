<script setup>
import { computed, ref } from 'vue'
import CategoryTabs from '@/components/menu/CategoryTabs.vue'
import NoticeBanner from '@/components/menu/NoticeBanner.vue'
import ProductSection from '@/components/menu/ProductSection.vue'
import CartSideBar from '@/components/cart/CartSideBar.vue'

const categories = [
  { id: 'platillos', label: 'Platillos', icon: '🍤' },
  { id: 'bebidas', label: 'Bebidas', icon: '🥤' },
  { id: 'caldos', label: 'Caldos', icon: '🍲' },
]

const active = ref('platillos')

// Mock base (puedes ajustar ids, precios, textos)
const products = [
  // Platillos
  {
    id: 'p-coctel-camaron',
    category: 'platillos',
    name: 'Coctel Camarón',
    description: 'Camarón preparado al momento. Opción: sin cebolla.',
    price: 70,
    image: '/mock/coctel.png',
    badge: 'Popular',
    ingredients: [
      { id: 1, nombre: 'Cebolla Morada' },
      { id: 3, nombre: 'Cilantro' },
      { id: 4, nombre: 'Limón' },
    ],
  },
  {
    id: 'p-marisca-tawa',
    category: 'platillos',
    name: 'Mariscada TAWA',
    description: 'Pulpos encebollados, camarones enchipotlados…',
    price: 520,
    image: '/mock/mariscada.png',
    ingredients: [
      { id: 5, nombre: 'Pulpo' },
      { id: 6, nombre: 'Camarón' },
      { id: 7, nombre: 'Chipotle' },
    ],
  },
  {
    id: 'p-pulpos-gallega',
    category: 'platillos',
    name: 'Pulpos a la Gallega',
    description: 'Pulpo cocido con pimentón, aceite de oliva y sal.',
    price: 145,
    image: '/mock/pulpos.png',
    ingredients: [
      { id: 5, nombre: 'Pulpo' },
      { id: 8, nombre: 'Pimentón' },
      { id: 9, nombre: 'Aceite de Oliva' },
    ],
  },
  {
    id: 'p-camarones-empanizados',
    category: 'platillos',
    name: 'Camarones Empanizados',
    description: 'Crujientes camarones rebosados con ensalada.',
    price: 145,
    image: '/mock/camarones.png',
    ingredients: [
      { id: 6, nombre: 'Camarón' },
      { id: 10, nombre: 'Lechuga' },
      { id: 11, nombre: 'Jitomate' },
    ],
  },

  // Caldos
  {
    id: 'c-caldo-camaron',
    category: 'caldos',
    name: 'Caldo de Camarón',
    description: 'Tradicional caldo rojo con camarón fresco.',
    price: 175,
    image: '/mock/caldo.png',
    ingredients: [
      { id: 6, nombre: 'Camarón' },
      { id: 12, nombre: 'Zanahoria' },
      { id: 13, nombre: 'Papa' },
    ],
  },
  {
    id: 'c-sopa-mariscos',
    category: 'caldos',
    name: 'Sopa de Mariscos',
    description: 'Selección de frutos del mar en caldo sazonado.',
    price: 175,
    image: '/mock/sopa.png',
    ingredients: [
      { id: 5, nombre: 'Pulpo' },
      { id: 6, nombre: 'Camarón' },
      { id: 14, nombre: 'Almeja' },
    ],
  },

  // Bebidas
  {
    id: 'b-coca',
    category: 'bebidas',
    name: 'Coca Cola',
    description: '355 ml',
    price: 25,
    image: '/mock/coca.png',
    ingredients: [],
  },
  {
    id: 'b-corona',
    category: 'bebidas',
    name: 'Cerveza Corona',
    description: 'Grupo Modelo',
    price: 35,
    image: '/mock/corona.png',
    ingredients: [],
  },
  {
    id: 'b-clamato',
    category: 'bebidas',
    name: 'Clamato',
    description: 'Bebida preparada',
    price: 60,
    image: '/mock/clamato.png',
    ingredients: [],
  },
  {
    id: 'b-jumex',
    category: 'bebidas',
    name: 'Jumex',
    description: 'Bebida 335 ml',
    price: 25,
    image: '/mock/jumex.png',
    ingredients: [],
  },
  {
    id: 'b-agua',
    category: 'bebidas',
    name: 'Agua Embotellada',
    description: '600 ml',
    price: 25,
    image: '/mock/agua.png',
    ingredients: [],
  },
]

const sections = computed(() => {
  const byCat = (catId) => products.filter(p => p.category === catId)
  if (active.value === 'platillos') return [{ title: 'Especialidades del Mar', items: byCat('platillos') }]
  if (active.value === 'caldos') return [{ title: 'Caldos y Sopas', items: byCat('caldos') }]
  if (active.value === 'bebidas') return [{ title: 'Bebidas', items: byCat('bebidas') }]
  return []
})
</script>

<template>
  <div class="card min-h-[calc(100vh-120px)] bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <div class="mx-auto w-full max-w-7xl px-4 py-6">
      <div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
        <!-- Main -->
        <main class="min-w-0">
          <div class="flex flex-col gap-4">
            <CategoryTabs v-model="active" :categories="categories" />
            <NoticeBanner />
          </div>

          <div class="mt-5 space-y-10">
            <ProductSection
                v-for="s in sections"
                :key="s.title"
                :title="s.title"
                :products="s.items"
            />
          </div>
        </main>

        <!-- Cart -->
        <CartSideBar table-label="Mesa #4" />
      </div>
    </div>
  </div>
</template>
