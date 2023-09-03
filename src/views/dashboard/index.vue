<template>
  <div class="dashboard-container">
    <h1>HelloWorld</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 20px;
    display: flex;
    justify-content: space-around;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
