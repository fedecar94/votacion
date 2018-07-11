<template>
  <div class="container">
    <form class="row">
      <div class="form-group col-md-6">
        <label for="escano">Cantidad de escaños</label>
        <input type="number"
          class="form-control" name="escano" v-model="escano" aria-describedby="escanoHelp">
        <small id="escanoHelp" class="form-text text-muted">Indica la cantidad de lugares disponibles en esta eleccion</small>
      </div>
      <div class="form-group col-md-6">
        <label for="habilitados">Votantes habilitados</label>
        <input type="number"
          class="form-control" name="habilitados" v-model="habilitados" aria-describedby="habilitadosHelp">
        <small id="habilitadosHelp" class="form-text text-muted">Es la cantidad de votantes que se han habilitado en esta eleccion</small>
      </div>
      <div class="form-group col-md-6">
        <label for="blancos">Votos en blanco</label>
        <input type="number"
          class="form-control" name="blancos" v-model="blancos" aria-describedby="blancosHelp">
        <small id="blancosHelp" class="form-text text-muted">Cantidad de papeletas que no poseen marca alguna</small>
      </div>
      <div class="form-group col-md-6">
        <label for="nulos">Votos nulos</label>
        <input type="number"
          class="form-control" name="nulos" v-model="nulos" aria-describedby="nulosHelp">
        <small id="nulosHelp" class="form-text text-muted">Cantidad de papeletas que no poseen marca valida</small>
      </div>
      <div class="col-12">
        <h4>Añadir movimiento</h4>
      </div>
      <div class="form-group col-md-5">
        <label for="movimiento">Nombre Movimiento</label>
        <input type="text"
          class="form-control" name="movimiento" v-model="movimiento" aria-describedby="movimientoHelp">
        <small id="movimientoHelp" class="form-text text-muted">Denominacion de la agrupacion politica</small>
      </div>
      <div class="form-group col-md-5">
        <label for="votos">Votos conseguidos</label>
        <input type="number"
          class="form-control" name="votos" v-model="votos" aria-describedby="votosHelp">
        <small id="votosHelp" class="form-text text-muted">Cantidad de votos conseguidos por la agrupacion</small>
      </div>
      <div class="col-md-2">
        <br>
        <button type="button" name="anadir" @click="anadir" class="btn btn-info btn-lg btn-block">Añadir</button>
      </div>
    </form>
    <br>
    <br>
    <table class="table table-striped table-responsive-lg">
      <thead>
        <tr>
          <th scope="col">Agrupacion</th>
          <th scope="col">Votos</th>
          <th scope="col">Porcentaje Total</th>
          <th scope="col">Porcentaje Votantes</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="mov in array" v-bind:key="mov.index">
          <th scope="row">{{mov.nombre}}</th>
          <td>{{mov.votos}}</td>
          <td>{{calculaPorcentaje(mov.votos)}} %</td>
          <td>{{calculaPorcentajeR(mov.votos)}} %</td>
          <td>
            <button type="button" name="eliminar" @click="eliminar(mov)" class="btn btn-danger btn-block">Eliminar</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Votó en blanco</th>
          <td>{{blancos}}</td>
          <td>{{calculaPorcentaje(blancos)}} %</td>
          <td>{{calculaPorcentajeR(blancos)}} %</td>
          <td>
            <button type="button" name="eliminar" class="btn btn-secondary btn-block" disabled>Eliminar</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Votó nulo</th>
          <td>{{nulos}}</td>
          <td>{{calculaPorcentaje(nulos)}} %</td>
          <td>{{calculaPorcentajeR(nulos)}} %</td>
          <td>
            <button type="button" name="eliminar" class="btn btn-secondary btn-block" disabled>Eliminar</button>
          </td>
        </tr>
        <tr>
          <th scope="row">No votó</th>
          <td>{{habilitados - totalVotantes}}</td>
          <td>{{calculaPorcentaje(habilitados - totalVotantes)}} %</td>
          <td>0 %</td>
          <td>
            <button type="button" name="eliminar" class="btn btn-secondary btn-block" disabled>Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: function () {
    return {
      movimiento: '',
      votos: 0
    }
  },
  computed: {
    totalVotantes: function () {
      var total = parseInt(0)
      if (this.array > []) {
        for (var i = 0; i < this.array.length; i++) {
          total = total + parseInt(this.array[i].votos)
        }
      }
      return parseInt(this.blancos) + parseInt(this.nulos) + total
    },
    array: function () {
      return this.$store.state.array
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
    }
  },
  methods: {
    anadir () {
      this.array.push({'nombre': this.movimiento, 'votos': this.votos})
      this.movimiento = ''
      this.votos = 0
    },
    calculaPorcentaje (votos) {
      if (this.habilitados === 0 || this.habilitados === '') { return 0 }
      return Math.round((votos / this.habilitados) * 10000) / 100
    },
    calculaPorcentajeR (votos) {
      if (this.habilitados === 0 || this.habilitados === '') { return 0 }
      return Math.round((votos / this.totalVotantes) * 10000) / 100
    },
    eliminar (mov) {
      var nuevo = []
      for (var i = 0; i < this.array.length; i++) {
        if (this.array[i] !== mov) {
          nuevo.push(this.array[i])
        }
      }
      this.array = nuevo
    }
  }
}
</script>
