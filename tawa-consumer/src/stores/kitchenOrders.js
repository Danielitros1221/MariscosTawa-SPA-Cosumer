import { defineStore } from "pinia";

/**
 * Kitchen Orders Store
 * Manages the 3 queues: new → preparing → completed (FIFO).
 */

/* ------------------------------------------------------------------ */
/*  MOCK DATA                                                         */
/* ------------------------------------------------------------------ */

function minutesAgo(m) {
  return Date.now() - m * 60_000;
}

const MOCK_ORDERS = [
  // ── NUEVAS ──
  {
    id: "ord-104",
    orderNumber: 104,
    location: "Mesa 4",
    orderType: "dine_in",
    items: [
      { qty: 2, name: "Cocteles de Camarón", notes: "SIN CEBOLLA" },
      { qty: 1, name: "Pulpos a la Gallega", notes: "" },
    ],
    status: "new",
    createdAt: minutesAgo(0.75),
    startedAt: null,
    completedAt: null,
  },
  {
    id: "ord-105",
    orderNumber: 105,
    location: "Barra",
    orderType: "takeaway",
    items: [
      { qty: 1, name: "Mariscada Tawa", notes: "" },
      { qty: 2, name: "Coca Cola", notes: "" },
    ],
    status: "new",
    createdAt: minutesAgo(2.17),
    startedAt: null,
    completedAt: null,
  },
  {
    id: "ord-106",
    orderNumber: 106,
    location: "Mesa 2",
    orderType: "dine_in",
    items: [{ qty: 1, name: "Sopa de Mariscos", notes: "" }],
    status: "new",
    createdAt: minutesAgo(3),
    startedAt: null,
    completedAt: null,
  },

  // ── EN PREPARACIÓN ──
  {
    id: "ord-102",
    orderNumber: 102,
    location: "Mesa 8",
    orderType: "dine_in",
    items: [
      { qty: 1, name: "Filete de Robalo", notes: "Bien frito", completed: false },
      { qty: 1, name: "Camarones al Mojo de Ajo", notes: "", completed: false },
      { qty: 1, name: "Cerveza XX Lager", notes: "", completed: true },
    ],
    status: "preparing",
    createdAt: minutesAgo(8.2),
    startedAt: minutesAgo(6),
    completedAt: null,
  },
  {
    id: "ord-103",
    orderNumber: 103,
    location: "Mesa 1",
    orderType: "dine_in",
    items: [{ qty: 1, name: "Tortas de Mariscos", notes: "", completed: false }],
    status: "preparing",
    createdAt: minutesAgo(4.5),
    startedAt: minutesAgo(3),
    completedAt: null,
  },

  // ── COMPLETADOS ──
  {
    id: "ord-098",
    orderNumber: 98,
    location: "Mesa 5",
    orderType: "dine_in",
    items: [
      { qty: 1, name: "Ceviche", notes: "" },
      { qty: 1, name: "Mojarra", notes: "" },
    ],
    status: "completed",
    createdAt: minutesAgo(20),
    startedAt: minutesAgo(18),
    completedAt: minutesAgo(12),
  },
  {
    id: "ord-099",
    orderNumber: 99,
    location: "UberEats #991",
    orderType: "takeaway",
    items: [
      { qty: 2, name: "Camarones Empanizados", notes: "" },
      { qty: 1, name: "Caldo de Camarón", notes: "" },
    ],
    status: "completed",
    createdAt: minutesAgo(22),
    startedAt: minutesAgo(19),
    completedAt: minutesAgo(15),
  },
  {
    id: "ord-100",
    orderNumber: 100,
    location: "Mesa 2",
    orderType: "dine_in",
    items: [{ qty: 1, name: "Orden de Hueva", notes: "" }],
    status: "completed",
    createdAt: minutesAgo(25),
    startedAt: minutesAgo(23),
    completedAt: minutesAgo(18),
  },
];

/* ------------------------------------------------------------------ */
/*  STORE                                                             */
/* ------------------------------------------------------------------ */

export const useKitchenOrdersStore = defineStore("kitchenOrders", {
  state: () => ({
    orders: structuredClone(MOCK_ORDERS),
  }),

  getters: {
    /** FIFO: oldest first */
    newOrders: (state) =>
      state.orders
        .filter((o) => o.status === "new")
        .sort((a, b) => a.createdAt - b.createdAt),

    preparingOrders: (state) =>
      state.orders
        .filter((o) => o.status === "preparing")
        .sort((a, b) => (a.startedAt ?? a.createdAt) - (b.startedAt ?? b.createdAt)),

    completedOrders: (state) =>
      state.orders
        .filter((o) => o.status === "completed")
        .sort((a, b) => (b.completedAt ?? 0) - (a.completedAt ?? 0)),

    countByStatus: (state) => {
      const counts = { new: 0, preparing: 0, completed: 0 };
      state.orders.forEach((o) => counts[o.status]++);
      return counts;
    },
  },

  actions: {
    _findOrder(orderId) {
      return this.orders.find((o) => o.id === orderId);
    },

    /**
     * Move order to the next status in the pipeline.
     * new → preparing → completed
     */
    moveToNext(orderId) {
      const order = this._findOrder(orderId);
      if (!order) return;

      if (order.status === "new") {
        order.status = "preparing";
        order.startedAt = Date.now();
      } else if (order.status === "preparing") {
        order.status = "completed";
        order.completedAt = Date.now();
      }
    },

    /**
     * Move order back to previous status.
     * completed → preparing → new
     */
    moveToPrev(orderId) {
      const order = this._findOrder(orderId);
      if (!order) return;

      if (order.status === "completed") {
        order.status = "preparing";
        order.completedAt = null;
      } else if (order.status === "preparing") {
        order.status = "new";
        order.startedAt = null;
      }
    },

    /**
     * Directly set the status (used by drag-and-drop).
     */
    moveToStatus(orderId, newStatus) {
      const order = this._findOrder(orderId);
      if (!order) return;
      if (!["new", "preparing", "completed"].includes(newStatus)) return;

      // Set timestamps based on new status
      if (newStatus === "new") {
        order.startedAt = null;
        order.completedAt = null;
      } else if (newStatus === "preparing") {
        if (!order.startedAt) order.startedAt = Date.now();
        order.completedAt = null;
      } else if (newStatus === "completed") {
        if (!order.startedAt) order.startedAt = Date.now();
        order.completedAt = Date.now();
      }

      order.status = newStatus;
    },

    /**
     * Toggle individual item completion (for preparing state).
     */
    toggleItemCompleted(orderId, itemIndex) {
      const order = this._findOrder(orderId);
      if (!order || !order.items[itemIndex]) return;
      order.items[itemIndex].completed = !order.items[itemIndex].completed;
    },

    /**
     * Reset to mock data (useful for demos).
     */
    resetOrders() {
      this.orders = structuredClone(MOCK_ORDERS);
    },
  },
});
