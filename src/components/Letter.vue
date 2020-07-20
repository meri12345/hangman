<template>
    <div class="p-2 bd-highlight">
       <p>{{letter}}</p>
    </div>
</template>

<script>
export default {
    props:['letter'],
  
}
</script>

<style scoped>
    .p-2{
        font-size: 70px;
    }
</style>