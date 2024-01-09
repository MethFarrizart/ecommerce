<template>
    <div>
        <div v-if="modalShow">
            <modal
                :setModalPopUp="setModalPopUp"
                @closeModal = "closeModal"
            >
            </modal>
        </div>
        
        <admin-form 
            title="Product" 
            :isSetButtonOrNot = true
            @addItem = "openModal"
            :tableHeader = "headers"
            :tableData = "items"
            :sortBy = "sortBy"
            :sortType = "sortType"
            :setButtonAction = "true"
            >
        </admin-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: null,
                items: [],
                sortBy: 'date',
                sortType: 'desc',
                setModalPopUp: 0,
                modalShow: false,

                headers: [
                    {
                        label: 'ProductID',
                        key: 'id',
                        sortable: true
                    },
                    {
                        label: 'ProductName',
                        key: 'name',
                        sortable: true
                    },
                    {
                        label: 'Qty',
                        key: 'qty',
                        sortable: true
                    },
                    {
                        label: 'Price',
                        key: 'price',
                        sortable: true
                    },
                ],

                apiUrl: process.env.API_URL,
            }
        },

        components: {
            modal: () => import('./components/modal')
        },

        created () {
            this.get();
        },

        methods: {
            get() {
                let vm = this;
                this.$axios.$post('product/get', null).then(res => {
                    vm.items = res.data;
                })
            },
            openModal() {
                this.modalShow = true;
                this.setModalPopUp = 1;
            },
            closeModal() {
                this.modalShow = false;
                this.setModalPopUp = 0;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>