<template>
 
    

   

    <section>
        
        <Compoproduit />
        
    </section>
   


</template>

<style>

</style>

<script>

    import {mapActions, mapState} from "pinia";
    import {useproductstore} from "../stores/product";
    import compoproduit from '../components/compoproduit.vue'
    import Compoproduit from "../components/compoproduit.vue";
    export default{
        name: 'Home',
        components : {
            compoproduit
        },
    data() {
        return {};
    },
    mounted() {
        this.fetchproduct;
    },
    computed: {
        ...mapActions(useproductstore, ["fetchproduct"]),
        ...mapState(useproductstore, ["getproduct"])
    },
    components: { Compoproduit }
}


</script>