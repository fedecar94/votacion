<template>
  <div class="small">
    <bar-chart :chart-data="datacollection"></bar-chart>
  </div>
</template>

<script>
  import BarChart from '@/barchart.js'

  export default {
    components: {
      BarChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    computed: {
      array: function () {
        return this.$store.state.array
      },
      movimientos: function () {
        return this.$store.state.movimientos
      },
      tipo: function () {
        return this.$store.state.tipo
      },
      nombres: function () {
        var array = []
        var t = this.movimientos.length
        if (this.resto) {t = t-1}
        for (let i = 0; i < t; i++) {
          array.push(this.movimientos[i].nombre)
        }
        return array
      },
      escanos: function () {
        var total = 0
        var array = []
        var t = this.movimientos.length
        if (this.resto) {t = t-1}
        for (let i = 0; i < t; i++) {
          total = total + parseInt(this.movimientos[i].cantidad)
        }
        for (let i = 0; i < t; i++) {
          array.push(Math.round((parseInt(this.movimientos[i].cantidad) / total) * 10000) / 100)
        }
        return array
      },
      votos: function () {
        var total = 0
        for (let i = 0; i < this.array.length; i++) {
          total = total + parseInt(this.array[i].votos)
        }
        var array = []
        for (let i = 0; i < this.array.length; i++) {
          array.push(Math.round((parseInt(this.array[i].votos) / total) * 10000) / 100)
        }
        return array
      },
      resto: function () {
        return this.tipo === 'Cociente Hare' || this.tipo === 'Cociente Droop' || this.tipo === 'Cociente Imperiali'
      }
    },
    created () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: this.nombres,
          datasets: [
            {
              label: 'Escaños conseguidos',
              backgroundColor: '#3989A3',
              data: this.escanos
            },
            {
              label: 'Votos conseguidos',
              backgroundColor: '#095354',
              data: this.votos
            },
          ]
        }
      }
    }
  }
</script>
