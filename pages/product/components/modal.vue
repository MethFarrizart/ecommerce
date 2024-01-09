<template>
    <div>
        <b-modal
            id="modal"
            v-model="modal"
            scrollable
            centered
            no-close-on-backdrop
            no-close-on-esc
            hide-header-close
            size="xl"
            title="Product Control"
        >

        <p> Hi guys</p>

        <template slot="modal-footer">
            <b-button size="xs" variant="outline-danger" @click="clearForm"> cancel </b-button>
            <b-button size="xs" variant="success" @click="save">{{ modalOk }}</b-button>
        </template>
        </b-modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                modal: false,
                apiUrl: process.env.API_URL,
            }
        },

        props: {
            setModalPopUp: {
                type: Number,	
                default: 0,
            },
        },

        computed: {
            modalOk() {
                return this.setModalPopUp == 1 ? 'Save' : 'Update'; 
            }
        },

        watch: {
            setModalPopUp: {
                handler(val){
                    if(val == 1){
                        this.modal = true;
                    }
                },
                immediate: true,
            }
        },

        methods: {
            clearForm() {
                this.modal = false;
                this.$emit('closeModal', null)
            },
            save() {
                alert(1)
            }
        },


    }
</script>

<style lang="scss" scoped>

</style>