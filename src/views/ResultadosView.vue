<template>
    <div>
      <!--  navbar  -->
      <nav class="navbar bg-body-tertiary navegador">
        <div class="container-fluid">
          <a href="#"><img src="../assets/mercado-libre-logo.png" class="d-block logo" height="35" alt=""></a>
          <form class="d-flex w-50 p-0" role="search">
            <input class="form-control buscador" type="search" placeholder="Buscar productos, marcas y más..."
              aria-label="Search">
            <button class="form" type="submit">Search</button>
          </form>
          <a href="#"><img src="../assets/disney.png" class="d-block" height="35" alt=""></a>
        </div>
      </nav>
  
      <div class="nav-menu navegador w-100">
        <ul class="nav-menu-list">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <div class="d-flex p-0" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      Categorias
                    </a>
                    <ul class="dropdown-menu bg-dark despliega">
                      <li><a class="dropdown-item text-white fonter" href="#">Vehículos</a></li>
                      <li><a class="dropdown-item text-white fonter" href="#">Supermercado</a></li>
                      <li><a class="dropdown-item text-white fonter" href="#">Tecnología</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Ofertas</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Historial</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Supermercado</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Moda</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Vender</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Ayuda</a>
                  </li>
                </ul>
              </div>
  
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">Crea tu cuenta</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Ingresa</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Mis compras</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                      fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                      <path
                        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg></a>
                </li>
              </ul>
            </div>
          </nav>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  
  
  import axios from 'axios';
  import info from './LoginView.json';
  const inicio = 'http://127.0.0.1/'
  
  export default {
    data: function () {
      return {
        caracteristicas: info.caracteristicas,
        caracteristicas1: info.caracteristicas1,
        caracteristicas2: info.caracteristicas2,
        caracteristicas3: info.caracteristicas3,
        nombre1: info.nombre1,
        nombre2: info.nombre2,
        nombre3: info.nombre3,
        producto1: info.producto1,
        importa1: info.importa1,
        importa2: info.importa2,
        importa3: info.importa3,
        importa4: info.importa3,
        estado1: info.estado1,
        referencia1: info.referencia1,
        referencia2: info.referencia1,
        referencia3: info.referencia1,
        precio1: info.precio,
        meses1: info.meses1,
        promo1: info.promo,
        dia: info.dia,
        periodo: info.periodo,
        interes1: info.interes1,
        disponibles1: info.disponibles1,
        puntos1: info.puntos1,
  
        caruselActivo: "carousel-item active",
        caruselInactivo: "carousel-item",
  
  
        imgs: [inicio + 'proteus1.jpg', inicio + 'proteus2.jpg', inicio + 'proteus3.jpg'],
        img4: inicio + 'proteus4.jpg',
        img5: inicio + 'proteus5.jpg',
        img6: inicio + 'proteus6.jpg',
  
  
      }
    },
    methods: {
      carga: function () {
        axios.get('http://localhost:8080/pro/muebles', {
        }).then(response => {
          console.log(response.data)
          this.mensaje4 = response.data;
        })
      },
      cambia: function () {
        this.mensaje3 = 'hola mundo'
      },
  
      selecciona: function (index) {
        return (index == 0) ? this.caruselActivo : this.caruselInactivo
      }
  
    } // aqui concluyen los métodos
  }
  </script>
  
  
  
  <style scoped>
  h2 {
    color: red;
  }
  </style>
  