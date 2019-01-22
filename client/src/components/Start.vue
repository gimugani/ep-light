<template>
  <v-layout id="msg" align-center justify-center>
    <v-flex md8 xs10>
      <div >
        Personalize a summer school experience in the U.S. with a choice of private schools,
        enrichment programs, and homestay options.
        <br><br>
        Finally, we pair your child with a Chungdahm chaperone and a dedicated local mentor.</div>
        <br>
      <v-btn :block="true" color="error" @click="click">Start</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  methods: {
    click() {
      this.$store.dispatch('setClick', this.$store.state.isClicked)
    }
  }
};
</script>

<style scoped>

  #msg  {
    margin-top: 20%;
    color: white;
    font-size: 1.3rem;
  }
</style>
