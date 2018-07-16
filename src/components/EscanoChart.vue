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
    movimientos: function () {
      return this.$store.state.movimientos
    },
    tipo: function () {
      return this.$store.state.tipo
    },
    nombres: function () {
      var array = []
      var t = this.movimientos.length
      if (this.resto) { t = t - 1 }
      for (let i = 0; i < t; i++) {
        array.push(this.movimientos[i].nombre)
      }
      return array
    },
    numeros: function () {
      var array = []
      var t = this.movimientos.length
      if (this.resto) { t = t - 1 }
      for (let i = 0; i < t; i++) {
        array.push(this.movimientos[i].cantidad)
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
            backgroundColor: '#A8005B',
            data: this.numeros
          }
        ]
      }
    }
  }
}
</script>
