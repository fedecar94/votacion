<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <EscanoChart></EscanoChart>
      </div>
      <div class="col-md-6">
        <votos-chart></votos-chart>
      </div>
      <div class="col-md-6">
        <comparativa-chart></comparativa-chart>
      </div>
      <div class="col-md-6">
        <participacion-chart></participacion-chart>
      </div>
    </div>
  </div>
</template>

<script>
import EscanoChart from '@/components/EscanoChart.vue'
import VotosChart from '@/components/VotosChart.vue'
import ParticipacionChart from '@/components/ParticipacionChart.vue'
import ComparativaChart from '@/components/ComparativaChart.vue'
export default {
  name: 'resultado',
  components: {
    EscanoChart,
    VotosChart,
    ParticipacionChart,
    ComparativaChart
  },
  computed: {
    movimientos: {
      get: function () {
        return this.$store.state.movimientos
      },
      set: function (newValue) {
        this.$store.dispatch('setmovimientos', newValue)
      }
    }
  }
}
</script>
