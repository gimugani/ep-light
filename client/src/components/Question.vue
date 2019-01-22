<template>
  <v-layout justify-center align-center>
    <v-flex md6 xs12>
      <!-- <div class="question">
        1. What is your child's name?
        <v-text-field solo v-model="name">
        </v-text-field>
        2. What is your child most interested in?
        <v-radio-group v-model="interest" :mandatory="false">
          <v-radio value="stem">
            <div class="label" slot="label">STEM(Science, Technology, Engineering, Math)</div>
          </v-radio>
          <v-radio  value="humanity">
            <div class="label" slot="label">Humanities</div>
          </v-radio>
          <v-radio value="art">
             <div class="label" slot="label">Art, Dance & Filmmaking</div>
          </v-radio>
          <v-radio value="outdoor">
            <div class="label" slot="label">Nature & Outdoor Activities </div>
          </v-radio>
          <v-radio  value="undecided">
            <div class="label" slot="label"> Undecided</div>
          </v-radio>
        </v-radio-group>
        3.What is the best phone number to reach you at?
        <v-text-field solo v-model="phoneNumber"></v-text-field>
      </div> -->

      <div class="question">
        <v-stepper v-model="questions">
          <v-stepper-header>
            <v-stepper-step editable complete step="1">Step 1</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step editable complete step="2">Step 2</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step editable step="3">Step 3</v-stepper-step>
          </v-stepper-header>
          <!-- step 1   -->
          <v-stepper-items>
            <v-stepper-content step="1">
              1. What is your child's name?
              <v-text-field solo v-model="name"></v-text-field>
              <v-btn
                :block="true"
                color="error"
                @click="questions = 2">
                Continue
              </v-btn>
            </v-stepper-content>
            <!-- step 2 -->
            <v-stepper-content step="2">
              2. What is your child most interested in?
              <v-radio-group v-model="interest" :mandatory="false">
                <v-radio value="STEM">
                  <div class="label" slot="label">STEM(Science, Technology, Engineering, Math)</div>
                </v-radio>
                <v-radio  value="Humanity">
                  <div class="label" slot="label">Humanities</div>
                </v-radio>
                <v-radio value="Art, Dance & Filmmaking">
                  <div class="label" slot="label">Art, Dance & Filmmaking</div>
                </v-radio>
                <v-radio value="Nature & Outdoor Activities">
                  <div class="label" slot="label">Nature & Outdoor Activities </div>
                </v-radio>
                <v-radio  value="Undecided">
                  <div class="label" slot="label"> Undecided</div>
                </v-radio>
              </v-radio-group>
              <v-btn
                :block="true"
                color="error"
                @click="questions = 3">
                Continue
              </v-btn>
            </v-stepper-content>
            <!-- step 3 -->
            <v-stepper-content step="3">
              3.What is the best phone number to reach you at?
              <v-text-field :mask="number" solo v-model="phoneNumber"></v-text-field>
              <v-btn
                :block="true"
                color="error"
                @click="submit">
                Submit
              </v-btn>
            </v-stepper-content>

          </v-stepper-items>
        </v-stepper>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import ResponseService from '../services/ResponseService.js';

export default {
  data () {
    return {
      name: null,
      phoneNumber: null,
      interest: null,
      questions: 0,
      number: '###-####-####'
    }
  },
  methods: {
    async submit() {
      const content = {
        name: this.name,
        phoneNumber: this.phoneNumber,
        interest: this.interest
      };
      console.log(content);
      try {
        await ResponseService.post(content);
        this.$router.push({
          name: 'thankyou',
        });
      } catch (error){
        this.error = error.response.data.error;
      }
    }
  }
}
</script>
<style>
  .question {
    margin-top: 15%;
    /* color: white; */
    font-size: 1rem;
    text-align: left;
  }
  .label {
    /* color: white; */
    font-size: 1rem;
  }
</style>
