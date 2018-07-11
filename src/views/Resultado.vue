<template>
  <div class="container">
    <h2>Se muestran los escaños ocupados por los distintos movimientos politicos</h2>
    <br>
    <form>
      <div class="form-group">
        <label for="tipo">Tipo de calculo</label>
        <select v-model="tipo" class="form-control" name="tipo">
          <option>Sistema d'Hondt</option>
          <option>Método Sainte-Laguë</option>
        </select>
      </div>
    </form>
    <table class="table table-striped table-responsive-lg">
      <thead>
        <tr>
          <th scope="col">Escaño</th>
          <th scope="col" v-for="nombre in nombres" v-bind:key="nombre.index">{{nombre}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="voto in tabla" v-bind:key="voto.index">
          <th scope="row">0</th>
          <td v-for="numero in voto" v-bind:key="numero.index">{{numero}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'resultado',
  data: function () {
    return {
      nombres: []
    }
  },
  computed: {
    array: {
      get: function () {
        return this.$store.state.array
      },
      set: function (newValue) {
        this.$store.dispatch('setarray', newValue)
      }
    },
    blancos: {
      get: function () {
        return this.$store.state.blancos
      },
      set: function (newValue) {
        this.$store.dispatch('setblancos', newValue)
      }
    },
    nulos: {
      get: function () {
        return this.$store.state.nulos
      },
      set: function (newValue) {
        this.$store.dispatch('setnulos', newValue)
      }
    },
    habilitados: {
      get: function () {
        return this.$store.state.habilitados
      },
      set: function (newValue) {
        this.$store.dispatch('sethabilitados', newValue)
      }
    },
    escano: {
      get: function () {
        return this.$store.state.escano
      },
      set: function (newValue) {
        this.$store.dispatch('setescano', newValue)
      }
    },
    tipo: {
      get: function () {
        return this.$store.state.tipo
      },
      set: function (newValue) {
        this.$store.dispatch('settipo', newValue)
      }
    },
    tabla: function () {
      return this.createTabla()
    }
  },
  methods: {
    createTabla: function () {
      var datos = this.array
      console.log(datos[0].nombre)
      this.nombres = []
      var numeros = []
      var tabla = []
      for (let i = 0; i < datos.length; i++) {
        this.nombres.push(datos[i].nombre)
      }
      console.log(this.nombres)
      for (let i = 0; i < datos.length; i++) {
        numeros.push(parseInt(datos[i].votos))
      }
      console.log(numeros)
      tabla.push(numeros)
      return tabla
    }
  }
}
</script>
