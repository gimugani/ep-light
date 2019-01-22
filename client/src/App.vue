<template>
  <div id="app">
    <v-app>
      <main>
        <v-container bg fill-height grid-list-md text-xs-center>
          <router-view/>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import './assets/stylesheets/main.css';

export default {
  name: 'App'
}
</script>

