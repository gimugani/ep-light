<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="primary" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="option"/>
      <v-spacer></v-spacer>
      <slot name="button"/>
    </v-toolbar>
      <slot name="search"/>
      <slot name="datatable" />
      <slot>
        No slot content defined
      </slot>
  </div>
</template>
<script>
export default {
  props: [
    'title',
  ],
};
</script>
<style>

</style>
