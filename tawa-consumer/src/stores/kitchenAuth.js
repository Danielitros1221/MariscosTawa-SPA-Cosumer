import { defineStore } from "pinia";

/**
 * Mock employee database.
 * In production this would hit the backend API.
 */
const MOCK_EMPLOYEES = [
  { id: "EMP-001", password: "tawa2026", name: "Chef Carlos", role: "chef" },
  { id: "EMP-002", password: "tawa2026", name: "Chef María", role: "chef" },
  { id: "EMP-003", password: "tawa2026", name: "Supervisor Ana", role: "supervisor" },
];

const SESSION_KEY = "tawa_kitchen_session";

function loadSession() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveSession(employee) {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(employee));
  } catch {
    // ignore
  }
}

function clearSession() {
  sessionStorage.removeItem(SESSION_KEY);
}

export const useKitchenAuthStore = defineStore("kitchenAuth", {
  state: () => {
    const saved = loadSession();
    return {
      isAuthenticated: !!saved,
      employee: saved, // { id, name, role } | null
      loginError: null,
    };
  },

  getters: {
    employeeName: (state) => state.employee?.name ?? "",
    employeeRole: (state) => state.employee?.role ?? "",
  },

  actions: {
    /**
     * Attempts login with employee ID and password.
     * @returns {boolean} true if successful
     */
    login(employeeId, password) {
      this.loginError = null;

      const trimmedId = employeeId?.trim().toUpperCase();
      const found = MOCK_EMPLOYEES.find(
        (e) => e.id === trimmedId && e.password === password
      );

      if (!found) {
        this.loginError = "ID de empleado o contraseña incorrectos.";
        return false;
      }

      const employee = { id: found.id, name: found.name, role: found.role };
      this.employee = employee;
      this.isAuthenticated = true;
      saveSession(employee);
      return true;
    },

    logout() {
      this.isAuthenticated = false;
      this.employee = null;
      this.loginError = null;
      clearSession();
    },
  },
});
