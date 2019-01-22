<template>
  <DataTable
    :items="items"
    :itemPerPage="itemPerPage"
    :search="search"
    :headers="headers"
  />
</template>
<script>
import DataTable from '@/components/DataTable.vue';
import ResponseService from '../services/ResponseService.js';

export default {
  name: 'responses',
  data() {
    return {
      search: '',
      items: [],
      itemPerPage: [15, 30, 50, { text: '$vuetify.dataIterator.rowsPerPageAll', value: -1 }],
      headers: [
        { text: 'Name', align: 'left', sortable: false, value: 'name' },
        { text: 'Interest', align: 'left', value: 'interest', sortable: false },
        { text: 'Phone Number', align: 'left', value: 'phoneNumber', sortable: false },
      ],
    }
  },
  async mounted(){
    this.items = (await ResponseService.index()).data;
  },
  components: {
    DataTable,
  },
};
</script>
<style scoped>
</style>
