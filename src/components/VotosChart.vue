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
      blancos: function () {
        return this.$store.state.blancos
      },
      nulos: function () {
        return this.$store.state.nulos
      },
      nombres: function () {
        var array = []
        for (let i = 0; i < this.movimientos.length; i++) {
          array.push(this.movimientos[i].nombre)
        }
        array.push('blancos')
        array.push('nulos')
        return array
      },
      numeros: function () {
        var array = []
        for (let i = 0; i < this.movimientos.length; i++) {
          array.push(this.movimientos[i].votos)
        }
        array.push(this.blancos)
        array.push(this.nulos)
        return array
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
              label: 'Total de votos',
              backgroundColor: '#4DA95D',
              data: this.numeros
            }
          ]
        }
      }
    }
  }
</script>
