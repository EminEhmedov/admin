import axios from "axios";
import { createStore } from "vuex";


const store =createStore({
    state:{
products:[],
gelenid:'',
gelenindex:''
    },
    getters:{
datanigonder(state){
    return state.products
}
    },
    mutations:{

    },
    actions:{
        datanial({state,commit},payload){
axios.get('https://login-5f77c-default-rtdb.firebaseio.com/productadd.json').then(({data})=>{
  for(let key in data){
;
   data[key].id=key
    state.products.push(data[key])
  }
 
 
   

})
        },
        dataniguncelle({state,commit},payload){
    
            
            axios.patch(`https://login-5f77c-default-rtdb.firebaseio.com/productadd/${state.gelenid}.json`,
            {status:payload
            }
            ).then(({data})=>{
                state.products[state.gelenindex].status=payload
              
        }); 
       
        },
        datanigetir({state,commit},payload){
            console.log(payload);
            state.gelenid=payload.keyid
            state.gelenindex=payload.ind
            
    },
    sebebgonderdim({state,commit},payload){
axios.patch(`https://login-5f77c-default-rtdb.firebaseio.com/productadd/${state.gelenid}.json`,
{
    sebeb:payload
}).
then((response)=>{
   state.products[state.gelenindex].sebeb=payload
})
    }

}})

export default store