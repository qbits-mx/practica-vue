<template>
    <div :class="frame" >
        <div :class="content">
            <span :class="tache" @click="closeModal">&times;</span>
            <h4>{{ avisoTitulo }}</h4>
            <p>{{ avisoMsg }}</p>
            <button class="btn btn-success" @click="perform">Aceptar</button>
        </div>
    </div>
</template>
  
<script>
  import router from '../router';

  export default {
    props: ['avisoTitulo', 'avisoMsg','target','ancho'],
    name: "AvisoWindow",
    data() {
      return {
        tache: 'close1',
        frame: 'modal1 modal-hide1',
        content: 'modal-content1 modal-content1-400'
      };
    },
    mounted() {
      if(this.target.length>0) this.tache='oculta'
    },
    methods: {
      closeModal() {
        this.frame = 'modal1 modal-hide1'
      },
      openModal() {
        this.frame = 'modal1 modal-show1'
      },
      perform() {
        if(this.target.length>0) 
          router.push(this.target)
        else
          this.frame = 'modal1 modal-hide1'
      }
    }
  };
</script>
  
<style scoped>
.oculta {
  display: none;
}
.modal1 {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-hide1 {
    display: none;
}
.modal-show1 {
    display: block;
}
/* Modal Content */
.modal-content1 {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  margin: auto;
}

.modal-content1-400 {
    width: 400px;
}

.modal-content1-600 {
    width: 600px;
}

.modal-content1-800 {
    width: 800px;
}

/* The Close Button */
.close1 {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close1:hover,
.close1:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

</style>  
