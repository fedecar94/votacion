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
          <th scope="col">Porcentaje</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">No votó</th>
          <td>{{habilitados}}</td>
          <td>100%</td>
          <td>
            <button type="button" name="anadir" id="anadir" class="btn btn-danger btn-block" disabled>Eliminar</button>
          </td>
        </tr>
        <tr v-for="mov in array" v-bind:key="mov.index">
          <th scope="row">{{mov.nombre}}</th>
          <td>{{mov.votos}}</td>
          <td>100%</td>
          <td>
            <button type="button" name="anadir" id="anadir" class="btn btn-danger btn-block">Eliminar</button>
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
      escano: 0,
      habilitados: 0,
      blancos: 0,
      nulos: 0,
      movimiento: '',
      votos: 0,
      array: []
    }
  },
  methods: {
    anadir () {
      this.array.push({'nombre': this.movimiento, 'votos': this.votos})
      this.movimiento = ''
      this.votos = 0
    }
  }
}
</script>
