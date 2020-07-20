<template>
<div>
 <h1>WINNER</h1>
 <button @click="restart" class="btn btn-lg btn-success">RESTART</button>
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
     color:green;
     font-size:100px;
     text-align: center;
 }
</style>