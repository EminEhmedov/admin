<script setup>
import { mapGetters } from 'vuex';

</script>


<template>
    <div>
      
      <div class="container">
        
       <table class="table">
  <thead>
    <tr >
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">About</th>
      <th scope="col">Image</th>
      <th scope="col">Status</th>
      <th scope="col">Praise</th>
       <th scope="col">Category</th>
       <th scope="col">ID</th>
    </tr>
  </thead>
  <tbody>

    <tr v-for="key ,index of datanigonder" :key="key" >
      <td>{{index}}</td>
           <td>{{key.name}}</td>
           <td>{{key.about}}</td>
           <td><img :src="key.img" alt="" style="width:300px; height:170px"></td>
              <td>
               <div class="d-flex flex-column">
                 <button class="btn btn-sm " type="button"  data-bs-toggle="modal" @click="sendme(key.id,index)" data-bs-target="#exampleModal"
                :class="{
                  'btn-danger': key.status=='Imtina edildi',
                  'btn-info' :key.status=='Tesdiq edildi',
                  'btn-warning' :key.status=='Tesdiq gozlenilir'
                }"
                >{{key.status}}</button>
                <span  class="badge bg-success mt-3 ">{{key.sebeb}}</span>
               
               </div>
                </td>
           <td>{{key.praise}}</td>
            <td><button class="btn btn-sm btn-success">{{key.categoriya}}</button></td>
           <td>{{key.id}}</td>
    </tr>
   
  </tbody>
</table>
<!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <select name="" id=""   v-model="this.yenistatus">
          <option value="Tesdiq edildi">Tesdiq edildi</option>
           <option value="Imtina edildi" >Imtina edildi</option>
            <option value="Tesdiq gozlenilir" selected>Tesdiq gozlenilir</option>
        </select>
        <div v-if="this.yenistatus=='Imtina edildi'">
          <label for=""> Imtina etmeyinizin Sebebini deyin</label> <br>
        <div class="d-flex mt-3">
          <input type="text" v-model="this.sebeb" class="form-control">
          <button class="btn btn-success" @click="sebebgelir"> Gonder</button>
      
        </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="send" >Save changes</button>
      </div>
    </div>
  </div>
</div>
      </div>

    </div>
</template>


<script>
export default {
  data() {
    return {

yenistatus:'tesdiq gozlenilir',
sebeb:''
    }
  },
    computed:{
        ...mapGetters(['datanigonder'])
    },
   methods:{
     send(){
  this.$store.dispatch('dataniguncelle',this.yenistatus)

    },
    sebebgelir(){
      console.log(this.sebeb);
 this.$store.dispatch('sebebgonderdim',this.sebeb)
    }
    ,
    sendme(keyid,ind){
 this.$store.dispatch('datanigetir',{keyid,ind})
 
//  console.log(ind);
    },
   
   }
}
</script>