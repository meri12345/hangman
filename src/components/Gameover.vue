<template>
<div>
 <h1>GAMEOVER</h1>
 <button @click="restart" class="btn btn-lg btn-danger">RESTART</button>
</div>
</template>

<script>
export default {
    methods:{
        restart(){
            this.$store.dispatch('restart')
        }
    }
}
</script>

<style scoped>
 div{
     color:red;
     font-size:100px;
     text-align: center;
 }
</style>