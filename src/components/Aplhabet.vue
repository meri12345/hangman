<template>
<div>
 <button class="btn btn-sm btn-success" v-for="letter in alphabet" :key="letter" @click="addLetter(letter)">{{letter}}</button>
</div>
</template>

<script>
export default {
    data(){
        return{
            alphabet:'abcdefghijklmnopqrstuvwxyz'.split('')
        }
    },
    methods:{
        addLetter(letter){
            this.$store.dispatch('addLetter',letter)
        }
    }
}
</script>

<style scoped>
.btn{
    margin-right: 10px;
}
</style>