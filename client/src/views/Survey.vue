<template>
  <div class="survey">
    <Start v-if="!$store.state.isClicked"/>
    <transition
      enter-active-class="animated fadeInUp"
      >
      <Question
        v-if="$store.state.isClicked"
      />
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Start from '@/components/Start.vue';
import Question from '@/components/Question.vue';

export default {
  name: 'survey',
  components: {
    Start,
    Question,
  },
};
</script>

<style>
.survey {
  width: 100%;
}
</style>
