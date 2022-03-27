<template>
    <div class="cuadrado">
      {{$store.state.contador}} <sup>2</sup> = {{$store.getters.cuadrado}}
    </div>

    <div>
      <input type="text" v-model="$store.state.texto"> 
      <button @click="$store.commit('agregardatos')">Agregar</button>
      <div>{{$store.state.texto}}</div>
    </div>

    <div id="datos">

    </div>

</template>

<script>
export default {
    name: 'Cuadrado'
    
}
</script>