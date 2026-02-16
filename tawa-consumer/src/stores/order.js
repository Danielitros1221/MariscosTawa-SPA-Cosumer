import { defineStore } from "pinia";

export const useOrderStore = defineStore("order", {
    state: () => ({
        /**
         * dine_in | takeaway | null
         * (puedes cambiar los strings si prefieres: 'here'/'to_go', etc.)
         */
        orderType: null,
    }),

    getters: {
        hasOrderType: (state) => !!state.orderType,
        isDineIn: (state) => state.orderType === "dine_in",
        isTakeaway: (state) => state.orderType === "takeaway",
    },

    actions: {
        setOrderType(type) {
            // Defensa mínima
            const allowed = ["dine_in", "takeaway"];
            this.orderType = allowed.includes(type) ? type : null;
        },

        resetOrder() {
            this.orderType = null;
        },
    },
});
