import { DeprecationTypes } from "vue";
import { createStore } from "vuex";

export default createStore({
  state: {
    contador: 0,
    texto: "",
  },
  getters: {
    //recupera datos en el estado
    cuadrado(state) {
      return state.contador * state.contador;
    },
  },
  mutations: {
    // para modificar
    bajarContador(state, random) {
      state.contador -= random;
    },
    subirContador(state, random) {
      state.contador += random;
    },

    agregardatos(state) {
      let datos = document.getElementById("tablasIP");
      const info = document.createElement("p");
      info.textContent = state.texto;
      datos.appendChild(info);
    },
  },
  actions: {
    //solo acciones asincronas como llamar un api
    async subirContador({ commit }) {
      const res = await fetch(
        "https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new"
      );
      const results = await res.json();
      console.log(results);
      commit("subirContador", results);
    },

    async bajarContador({ commit }) {
      const res = await fetch(
        "https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new"
      );
      const results = await res.json();
      console.log(results);
      commit("bajarContador", results);
    },
  },
  modules: {},
});
