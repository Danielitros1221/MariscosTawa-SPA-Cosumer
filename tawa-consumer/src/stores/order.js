import { defineStore } from "pinia";

export const useOrderStore = defineStore("order", {
    state: () => ({
        /**
         * dine_in | takeaway | null
         * (puedes cambiar los strings si prefieres: 'here'/'to_go', etc.)
         */
        orderType: null,

        /**
         * cash | card | counter | null
         */
        paymentMethod: null,

        /**
         * Número de orden generado al confirmar (ej. "047")
         */
        orderNumber: null,
    }),

    getters: {
        hasOrderType: (state) => !!state.orderType,
        isDineIn: (state) => state.orderType === "dine_in",
        isTakeaway: (state) => state.orderType === "takeaway",

        hasPaymentMethod: (state) => !!state.paymentMethod,
        paymentLabel: (state) => {
            const labels = {
                cash: "Efectivo",
                card: "Tarjeta",
                counter: "Pago en Caja",
            };
            return labels[state.paymentMethod] ?? "";
        },

        isConfirmed: (state) => !!state.orderNumber,
    },

    actions: {
        setOrderType(type) {
            // Defensa mínima
            const allowed = ["dine_in", "takeaway"];
            this.orderType = allowed.includes(type) ? type : null;
        },

        setPaymentMethod(method) {
            const allowed = ["cash", "card", "counter"];
            this.paymentMethod = allowed.includes(method) ? method : null;
        },

        /**
         * Genera un número de orden aleatorio de 3 dígitos (001-999)
         */
        confirmOrder() {
            const num = Math.floor(Math.random() * 999) + 1;
            this.orderNumber = String(num).padStart(3, "0");
            return this.orderNumber;
        },

        resetOrder() {
            this.orderType = null;
            this.paymentMethod = null;
            this.orderNumber = null;
        },
    },
});
