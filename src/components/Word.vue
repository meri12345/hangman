<template>
<div>
    HINT:{{getList[getIndex]}}
    <div class="d-flex flex-row bd-highlight mb-3 justify-content-around">
       <app-letter v-for="(letter,index) in getUnknown" :letter=letter :key=index></app-letter> 
    </div>
</div>
    
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import Letter from './Letter';
export default {
    
    data(){
        return{
            index:-1,
            checkLetter:'a'
        }
    },
   computed:{
       ...mapGetters(['getList', 'getIndex','getUnknown'])
   },
   components:{
       appLetter:Letter
   },
   

    created(){
        this.$store.dispatch('randomize')        
    }
    
}
</script>

<style scoped>
.d-flex{
    margin-top: 50px;
}
</style>