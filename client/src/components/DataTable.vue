<template>
  <v-layout align-center justify-center>
    <v-flex lg6 md8 xs12>
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        :rows-per-page-items="itemPerPage"
        :hide-actions="items.length == 0"
        >
        <template slot="headers" slot-scope="props">
        <tr class="primary">
          <th
            v-for="header in props.headers"
            :key="header.text"
            :style="{color: 'white'}">
            {{ header.text}}
          </th>
        </tr>
      </template>
      <template slot="items" slot-scope="props">
        <tr>
          <td class="text-xs-center">{{props.item.name}} </td>
          <td class="text-xs-center">{{props.item.interest}}</td>
          <td class="text-xs-center">{{props.item.phoneNumber}}</td>
        </tr>
      </template>
      <template slot="no-data">
        <br><br>
          <p>There are no responses yet</p>
        <br>
      </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: ['headers', 'items', 'itemPerPage', 'search'],
}
</script>
<style scoped>
  tr {
    cursor: pointer;
  }
</style>
