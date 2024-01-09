<template>
    <div>
      <b-container fluid="xl" class="shadow mt-3 p-4">
        <b-row>
          <b-col cols="6" class="pt-2">
            {{ title }}
          </b-col>
  
          <b-col v-if="isSetButtonOrNot" cols="6">
            <b-button variant="success" @click="addItem"> Add Product </b-button>
          </b-col>
        </b-row>
      </b-container>
  
      <b-container class="mt-3">
      
        <b-table
            striped
            hover
            responsive
            :fields="tableHeader"
            :items="tableData"
            :sort-by.sync="sortBy"
            :sort-type.sync="sortType"
            @sort-changed="handleSortChanged"
            show-empty
            borderless
        >
        </b-table>

      </b-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
           
        }
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      isSetButtonOrNot: {
        type: Boolean,
        default: false
      },
      tableHeader: {
        type: Array,
        default: () => []
      },
      tableData: {
        type: Array,
        default: () => []
      },
      sortBy: {
        type: String,
        default: null
      },
      sortType: {
        type: String,
        default: 'desc'
      },
      setButtonAction: {
        type: Boolean,
        default: false,
      }
    },
    watch: {
        setButtonAction: {
            handler(val){
                if(val){
                    this.tableHeader.unshift({
                        label: 'Action',
                        key: 'Action',
                        sortable: false
                    })
                }
            }
        },
        immediate: true
    },
    methods: {
      addItem() {
        this.$emit('addItem');
      },
      handleSortChanged(sortKey, sortType) {
        this.$emit('update:sortBy', sortKey);
        this.$emit('update:sortType', sortType);
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  