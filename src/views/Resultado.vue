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
          <option>Cociente Hare</option>
          <option>Cociente Droop</option>
          <option>Cociente Imperiali</option>
        </select>
      </div>
    </form>
    <table class="table table-striped table-responsive-lg" v-if="promedio">
      <thead>
        <tr>
          <th scope="col">Escaño</th>
          <th scope="col" v-for="mov in tabla.movimientos" v-bind:key="mov.index">{{mov.nombre}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="voto in tabla.votos" v-bind:key="voto.index">
          <th scope="row">{{voto.index}}</th>
          <td v-for="numero in voto.data" v-bind:key="numero.index">{{numero}}</td>
        </tr>
        <tr>
          <th scope="row">Total</th>
          <th v-for="mov in tabla.movimientos" v-bind:key="mov.index">{{mov.cantidad}}<br>{{mov.escanos}}</th>
        </tr>
      </tbody>
    </table>
    <table class="table table-striped table-responsive-lg" v-if="resto">
      <thead>
        <tr>
          <th>Partido</th>
          <th scope="col" v-for="mov in tabla.movimientos" v-bind:key="mov.index">{{mov.nombre}}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Total votos</th>
          <td v-for="numero in tabla.votos" v-bind:key="numero.index">{{numero.votos}}</td>
        </tr>
        <tr>
          <th scope="row">Esaños por cociente</th>
          <td v-for="numero in tabla.votos" v-bind:key="numero.index">{{numero.escanoInicial}}</td>
        </tr>
        <tr>
          <th scope="row">Votos por cociente</th>
          <td v-for="numero in tabla.votos" v-bind:key="numero.index">{{numero.votosCociente}}</td>
        </tr>
        <tr>
          <th scope="row">Votos por cociente</th>
          <td v-for="numero in tabla.votos" v-bind:key="numero.index">{{numero.residuo}}</td>
        </tr>
        <tr>
          <th scope="row">Votos por cociente</th>
          <td v-for="numero in tabla.votos" v-bind:key="numero.index">{{numero.escanoResiduo}}</td>
        </tr>
        <tr>
          <th scope="row">Total</th>
          <th v-for="mov in tabla.movimientos" v-bind:key="mov.index">{{mov.cantidad}}<span v-if="promedio"><br>{{mov.escanos}}</span></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'resultado',
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
      var datos = this.array
      var movimientos = []
      var tabla = []
      var numeros = []
      var mayor = {'index': 0, 'valor': 0}
      for (let i = 0; i < datos.length; i++) {
        movimientos.push({'nombre': datos[i].nombre, 'cantidad': 0, 'escanos': []})
      }
      if (this.promedio) {
        for (let j = 0; j < this.escano; j++){
          mayor = {'index': 0, 'valor': 0}
          for (let i = 0; i < movimientos.length; i++) {
            if (this.tipo === 'Sistema d\'Hondt') {
              numeros.push(Math.floor(parseInt(datos[i].votos) / (movimientos[i].cantidad + 1)))
            }
            if (this.tipo === 'Método Sainte-Laguë') {
              numeros.push(Math.floor(parseInt(datos[i].votos) / ((movimientos[i].cantidad * 2) + 1)))
            }
            if (mayor.valor < numeros[i]) {
              mayor.valor = numeros[i]
              mayor.index = i
            }
          }
          tabla.push({'index': j + 1, 'data': numeros})
          movimientos[mayor.index].cantidad = movimientos[mayor.index].cantidad + 1
          movimientos[mayor.index].escanos.push(j + 1)
          numeros = []
        }
      }
      if (this.resto) {
        var total = {'votos': 0,
          'escanoInicial': 0,
          'votosCociente': 0,
          'residuo': 0}
        var cociente = 0
        var escanoInicial = 0
        var votosCociente = 0
        var residuo = 0
        for (let j = 0; j < datos.length; j++) {
          total.votos = total.votos + parseInt(datos[j].votos)
        }
        movimientos.push({'nombre': 'Total', 'cantidad': this.escano})
        if (this.tipo === 'Cociente Hare') {
          cociente = Math.round(total.votos / this.escano)
        }
        if (this.tipo === 'Cociente Droop') {
          cociente = 1 + Math.round(total.votos / (parseInt(this.escano) + 1))
        }
        if (this.tipo === 'Cociente Imperiali') {
          cociente = Math.round(total.votos / (parseInt(this.escano) + 2))
        }
        for (let j = 0; j < datos.length; j++) {
          escanoInicial = Math.floor(datos[j].votos / cociente)
          movimientos[j].cantidad = escanoInicial
          total.escanoInicial = total.escanoInicial + escanoInicial
          votosCociente = escanoInicial * cociente
          total.votosCociente = total.votosCociente + votosCociente
          residuo = datos[j].votos - votosCociente
          total.residuo = total.residuo + residuo
          numeros.push({'index': j, 'residuo': residuo})
          tabla.push({'votos': datos[j].votos,
            'escanoInicial': escanoInicial,
            'votosCociente': votosCociente,
            'residuo': residuo,
            'escanoResiduo': 0})
        }
        tabla.push({'votos': total.votos,
          'escanoInicial': total.escanoInicial,
          'votosCociente': total.votosCociente,
          'residuo': total.residuo,
          'escanoResiduo': this.escano - total.escanoInicial})
        for (let j = 0; j < (this.escano - total.escanoInicial); j++) {
          for (let i = 0; i < numeros.length; i++) {
            if (numeros[i].residuo > mayor.valor) {
              mayor.valor = numeros[i].residuo
              mayor.index = numeros[i].index
            }
          }
          tabla[mayor.index].escanoResiduo = '+1'
          movimientos[mayor.index].cantidad = movimientos[mayor.index].cantidad + 1
          numeros[mayor.index].residuo = 0
          mayor = {'index': 0, 'valor': 0}
        }
      }
      
      return {'movimientos': movimientos, 'votos': tabla}
    },
    promedio: function () {
      return this.tipo === 'Sistema d\'Hondt' || this.tipo === 'Método Sainte-Laguë'
    },
    resto: function () {
      return this.tipo === 'Cociente Hare' || this.tipo === 'Cociente Droop' || this.tipo === 'Cociente Imperiali'
    }
  },
  methods: {
  }
}
</script>
