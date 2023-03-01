<template>
  <v-container class="fill-height" fluid style="margin-top: 50px">
    <v-row no-gutters class="btn-new">
      <v-col>
        <h2>Bienvenido</h2>
      </v-col>  
    </v-row>
  </v-container>

  <!-- NAVIGATION DRAWER-->
  <navigation-drawer></navigation-drawer>
</template>
<script>
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import store from "@/store";

export default {
  name: "App",
  data() {
    return {
      userId: store.state.userData.idUser,    
    };
  },
  components: {
    NavigationDrawer,
  },
  mounted() {    
  },
  methods: {    
    showDialog: function (idImage) {
      this.dialog = true;
      this.idImage = idImage;    
    },
  },
};
</script>
<style scoped>
</style>
