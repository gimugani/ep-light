<template>
  <v-layout id="msg" align-center justify-center>
    <v-flex md6 xs10>
      <div>
        Thank you for the participation. We will get back to you soon.
        <br><br>
      <v-btn :block="true" color="error">Submitted
        <v-icon dark right>check_circle</v-icon>
      </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'thankyou',
}
</script>
<style scoped>
   #msg  {
    margin-top: 20%;
    color: white;
    font-size: 1.3rem;
  }
</style>
