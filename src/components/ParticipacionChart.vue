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
      return this.$store.state.array
    },
    habilitados: function () {
      return this.$store.state.habilitados
    },
    blancos: function () {
      return this.$store.state.blancos
    },
    nulos: function () {
      return this.$store.state.nulos
    },
    total: function () {
      var total = 0
      for (let i = 0; i < this.movimientos.length; i++) {
        total = total + parseInt(this.movimientos[i].votos)
      }
      total = total + parseInt(this.blancos)
      total = total + parseInt(this.nulos)
      return Math.round((total / this.habilitados) * 10000) / 100
    }
  },
  created () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: ['%'],
        datasets: [
          {
            label: 'Votó',
            backgroundColor: '#BEF274',
            data: [this.total]
          },
          {
            label: 'No votó',
            backgroundColor: '#F47735',
            data: [100 - this.total]
          }
        ]
      }
    }
  }
}
</script>
