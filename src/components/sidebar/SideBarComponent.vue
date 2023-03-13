<template>
  <div class="sidebar d-flex flex-column flex-shrink-0" :style="{ width: sidebarWidth }">
      <div class="m-auto">
        <SidebarLinks to="/" icon="bi bi-list" class="mb-5">Login</SidebarLinks>
        <SidebarLinks to="/ui/compras" icon="bi bi-handbag">Compras</SidebarLinks>
        <SidebarLinks to="#" icon="bi bi-ticket-perforated">Ofertas</SidebarLinks>
        <SidebarLinks to="#" icon="bi bi-shop-window">Mi tienda</SidebarLinks>
        <SidebarLinks to="#" icon="bi bi-coin">Mercado pago</SidebarLinks>
        <SidebarLinks to="#" icon="bi bi-music-note-list">Música</SidebarLinks>
        <SidebarLinks to="#" icon="bi bi-card-list">Cuentas</SidebarLinks>
        <SidebarLinks to="#" icon="bi bi-person-circle">Perfil</SidebarLinks>
        <SidebarLinks to="#" icon="bi bi-gear">Configuración</SidebarLinks>
        <span
          class="collapse-icon"
          :class="{ 'rotate-180' : collapsed }"
          @click="toggleSidebar" 
        >
        <i class="bi bi-caret-left-fill"></i>
        </span>
      </div>
  </div>
</template>

<script>
import { collapsed, toggleSidebar, sidebarWidth } from './state';
import SidebarLinks from './SidebarLinks.vue';

export default{
  props: {},
  components: { SidebarLinks },
  setup(){
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<style>
:root {
  --sidebar-bg-color: rgba(228, 228, 228, 0.404);
  --sidebar-item-hover: rgba(158, 121, 121, 0.404);
  --sidebar-item-active: #272b6756;
}
</style>

<style scoped>
.sidebar{
  color: grey;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 7.3em;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s;

  /*display: flex;
  flex-direction: column;*/
  align-items: center;
  margin: auto;
}

.collapse-icon{
  position: absolute;
  bottom: 0;
  left: .5em;
  padding: 0.75em;

  color: gray;

  transition: 0.2s linear;
}

.rotate-180{
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>