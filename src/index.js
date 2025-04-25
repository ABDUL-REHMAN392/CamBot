import { create } from 'zustand';

const useStore = create((set) => ({
  isAuthenticated: false,
  userEmail: '',
  messages: [],
  query: '',
  isAdminLoggedIn: false,
  setAdminLoggedIn: (status) => set({ isAdminLoggedIn: status }),

  // Login and logout actions
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false, userEmail: '', messages: [], query: '' }),

  // Set user email
  setUserEmail: (value) => set({ userEmail: value }),

  // Add message to the conversation
  addMessage: (message) => set((state) => ({
    messages: [...state.messages, message],
  })),

  // Set the query
  setQuery: (newQuery) => set(() => ({
    query: newQuery,
  })),
}));

export default useStore;
