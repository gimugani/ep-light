<template>
    <v-layout id="container" justify-center>
      <v-flex md6 xs12>
        <Panel title="Login">
          <div class="pl-4 pr-4 pt-2 pb-2">
            <form
              name="camp-manager-form"
              autocomplete="off">
              <v-text-field
                prepend-icon="fas fa-envelope"
                label="Email"
                v-model="email"/>
                <br>
              <v-text-field
                prepend-icon="fas fa-lock"
                label="Password"
                :append-icon="show ? 'visibility_off' : 'visibility'"
                :type="show ? 'text' : 'password'"
                @click:append="show=!show"
                v-model="password"/>
            </form>
              <v-alert
                class="ml-4"
                :value="error"
                transition="scale-transition"
                error>
                {{error}}
              </v-alert>
            <v-btn flat small class="accent" dark @click="login">Login</v-btn>
            <!-- <v-divider></v-divider>
            <p>Don't have an account? <router-link to="/signup">Sign Up</router-link></p> -->
          </div>
        </Panel>
      </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
      show: false,
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'responses',
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>
<style>
  #container {
    margin-top: 15%;
  }
</style>
