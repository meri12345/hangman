<template>
<div>
  <div v-if="getLives>0 && !getDone" class="container">
    <h2>Hangman // Lives: {{getLives}} </h2>
    <div class="row">
    <div class="col-sm-3">
      
    </div>
    <div class="col-sm-6">
      <img :src="getImgUrl(getLives+1)" :alt="picURL">
    </div>
    <div class="col-sm-3">
      
    </div>
  </div>
  
  <div class="row">
    <div class="col-sm-3">
      
    </div>
    <div class="col-sm-6">
      <app-word></app-word>      
    </div>
    <div class="col-sm-3">
      
    </div>
  </div>
  <app-alphabet></app-alphabet>
  </div>
  <div>
    <game-over v-if="getLives==0"></game-over>
    <app-winner v-if="getDone"> </app-winner>
  </div>
</div>

</template>

<script>
import Word from './components/Word';
import Alphabet from './components/Aplhabet';
import Gameover from './components/Gameover';
import Winner from './components/Winner'
export default{
  components:{
    appWord: Word,
    appAlphabet: Alphabet,
    gameOver:Gameover,
    appWinner: Winner
  },
  computed:{
    getLives(){
      return this.$store.getters.getLives
    },
    getDone(){
      return this.$store.getters.getDone
    }
    
  },
  methods:{
    getImgUrl(pic) {
    var images = require.context('./assets/', false, /\.png$/)
    return images('./' + pic + ".png")
 }
  }
  

}
</script>

