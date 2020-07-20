import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        wordList:['simple','flower','lake','female','book','snake','paint','fish','gate','crew'],
        lives:6,
        index:0,
        letters:[],
        done:false
    },
    getters:{
        getLives:(state)=>{
            return state.lives
        },
        getList:(state)=>{
            return state.wordList
        },
        getIndex:(state)=>{
            return state.index
        },
        getUnknown:(state)=>{
            
            return (state.wordList[state.index].split("").map((el)=>{
                if (state.letters.includes(el)){
                    return el
                }
                else{
                    
                    return '_'
                }
            })).join("")
        },
        getDone:(state)=>{
            return state.done
        }
    },
    mutations:{
        'RANDOM_INDEX':(state)=>{
            state.index= Math.floor(Math.random() * 10)
        },
        'ADD_LETTER':(state,letter)=>{
            state.letters.push(letter);

            if(!(state.wordList[state.index].includes(letter))){
                state.lives--;
            }

          const doneCheck = state.wordList[state.index].split("").every((el)=>{
                return state.letters.includes(el)
            })
            state.done=doneCheck;
        
        },
        'RESTART':(state)=>{
            state.letters=[],
            state.lives=7,
            state.done=false
        }
    },
    actions:{
        randomize:({commit})=>{
            commit('RANDOM_INDEX')
        },
        addLetter:({commit},letter)=>{
            commit('ADD_LETTER',letter)
        },
        restart:({commit})=>{
            commit('RESTART')
        }
    }
})