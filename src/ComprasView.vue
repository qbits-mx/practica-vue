<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg  amarella d-flex justify-content-around">
                <div class="d-flex">
                    <a class="navbar-brand" href="#"><img :src=inicio2+img1 alt="hola" class="logo1"></a>
                    <form class="d-flex align-items-center">
                    <input class="form-control me-2 logo1 largo1" type="search" placeholder="" aria-label="Search">
                    <button class="btn btn-outline-success logo1 mx-2" type="submit">Buscar</button>
                    </form>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link active mx-2" aria-current="page" href="#"><img :src=inicio2+img2 alt="hola" class="logo1 img-fluid"></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#"><img :src=inicio2+img3 alt="hola" class="logo1 img-fluid"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg amarella d-flex justify-content-around p-0">
                <div class="d-flex p-0">
                    <a class="navbar-brand d-flex align-items-center" href="#"><img :src=inicio2+img4 alt="hola"></a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav d-flex align-items-center justify-content-around">
                            <li class="nav-item">
                                <a class="nav-link mx-3 p-0" aria-current="page" href="#">Categorías</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-3 p-0" aria-current="page" href="#">Ofertas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-3 p-0" aria-current="page" href="#">Historial</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-3 p-0" aria-current="page" href="#">Supermercado</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-3 p-0" href="#">Moda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-3 p-0" href="#">Vender</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-3 p-0" href="#">Ayuda</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav d-flex align-items-center justify-content-around mx-3">
                            <li class="nav-item">
                                <a class="nav-link mx-2 p-0" href="#">Usuario</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-2 p-0" href="#">Mis compras</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-2 p-0" href="#">Favoritos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <body>
            <div class="d-flex bg-bar">
                <div class="d-flex flex-column flex-shrink-0 bg-light vh-100" style="width: 4.5rem;">
                    <a href="/" class="d-block p-3 link-dark text-decoration-none my-5" title="Menu" data-bs-toggle="tooltip" data-bs-placement="right">
                    <i class="bi bi-list"></i>
                    <span class="visually-hidden">Menu</span>
                    </a>
                    <ul class="nav nav-flush flex-column mb-auto text-center">
                    <li class="nav-item">
                        <a href="#" class="nav-link active py-3" aria-current="page" title="Compras" data-bs-toggle="tooltip" data-bs-placement="right">
                        <i class="bi bi-handbag"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark py-3" title="Ofertas" data-bs-toggle="tooltip" data-bs-placement="right">
                        <i class="bi bi-ticket-perforated"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark py-3" title="Mi tienda" data-bs-toggle="tooltip" data-bs-placement="right">
                        <i class="bi bi-shop-window"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark py-3" title="Mercado pago" data-bs-toggle="tooltip" data-bs-placement="right">
                        <i class="bi bi-coin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark py-3" title="Streaming" data-bs-toggle="tooltip" data-bs-placement="right">
                        <i class="bi bi-music-note-list"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark py-3" title="Cuentas" data-bs-toggle="tooltip" data-bs-placement="right">
                        <i class="bi bi-card-list"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark py-3" title="Perfil" data-bs-toggle="tooltip" data-bs-placement="right">
                        <i class="bi bi-person-circle"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link link-dark py-3" title="Configuración" data-bs-toggle="tooltip" data-bs-placement="right">
                        <i class="bi bi-gear"></i>
                        </a>
                    </li>
                    </ul>
                </div>
                <div class="px-5 pt-2 w-100">
                    <div class="p-5">
                        <h2 class="texts1"><strong>Compras</strong></h2>
                    </div>
                    <div class="px-5 d-flex ">
                        <div class="input-group me-5 w-25">
                            <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
                            <input type="text" class="form-control" placeholder="Buscar" aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group mx-5 w-auto">
                            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-sliders me-1"></i> Todas</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Este mes</a></li>
                                <li><a class="dropdown-item" href="#">Mes pasado</a></li>
                                <li><a class="dropdown-item" href="#">Este año</a></li>
                            </ul>
                        </div>
                        <div>
                            <span class="txtgr">|</span>
                        </div>
                        <div class="mx-5 d-flex align-items-center">
                            <span class="txtmd">{{ totalCompras }} compras</span>
                        </div>
                    </div>
<!------------------------Aquí están las cards de compras---------------------------------->
                    <div v-for="(producto,index) in data" v-bind:key="index" class="mb-5">
                        <div class=" px-5 pt-4 texts1">
                            <div class="card shadow-sm w-75">
                                <div class="row g-0 border d-flex align-items-center">
                                    <p class="px-4 py-2 my-auto tfecha"><strong>{{ producto.fechaCompra }}</strong></p>
                                </div>
                                <div class="row g-0">
                                    <div class="col-md-3 m-0">
                                        <img :src=inicio2+producto.img alt="..." class="img-fluid rounded-start p-5 w-auto">
                                    </div>
                                    <div class="col-md-4 d-flex align-items-center">
                                        <div>
                                            <p class="verde m-0">{{ producto.statusEnvio }}</p>
                                            <p class="mt-1">{{ producto.llegoStatus }} el {{ producto.statusDeEntrega }}</p>
                                            <p class="textDesc">{{ producto.descripcion }} <br>
                                                {{ producto.unidadesTotal }} unidades
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-2 d-flex align-items-center">
                                        <div>
                                            <p class="textDesc m-0">{{ producto.vendedor }}</p>
                                            <p class="linksurl"><strong>Enviar mensaje</strong></p>
                                        </div>
                                    </div>
                                    <div class="col-md-3 d-flex flex-column align-items-center justify-content-center">
                                        <button class="btn btn-primary w-75">Ver compra</button>
                                        <button class="btn btn-light w-75 mt-3 linksurl">Volver a comprar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
<!------------------------Aquí terminan las cards de compras---------------------------------->
                </div>
            </div>
        </body>
        <footer class="footer mt-auto py-3 bg-light border-top">
            <nav class="navbar navbar-expand-lg d-flex justify-content-around">
                <ul class="navbar-nav d-flex align-items-center justify-content-around">
                    <li class="navbar-item mx-4">Trabaja con nosotros</li>
                    <li class="navbar-item mx-4">Términos y condiciones</li>
                    <li class="navbar-item mx-4">Cómo cuidamos tu privacidad</li>
                    <li class="navbar-item mx-4">Accesibilidad</li>
                    <li class="navbar-item mx-4">Ayuda</li>
                </ul>
            </nav>
            <div class="texts1 d-flex justify-content-center">
                <p class="textDesc">Copyright © 1999-2023 El presente canal de instrucción o ambiente, es operado por DeRemate.Com de México, S. de R.L. de C.V. identificada bajo la marca comercial "Mercado Libre".<br>
                Insurgentes Sur 1602 Piso 9 Suite 900, Crédito Constructor Benito Juarez, 03940 Ciudad de México, CDMX, Mexico</p>
            </div>
        </footer>
    </div>
</template>
<script>
import info from "./ComprasView.json";
const  inicio =  'http://127.0.0.1/';

export default {
    data: function () {
        return {
            inicio2: inicio,
            img1: "merca04.png",
            img2: "merca02.png",
            img3: "merca03.png",
            img4: "05.png",

            data: info,
            
        }
    }
}
</script>
<style scoped>
.bg-bar{
  background-color: rgba(228, 228, 228, 0.404);
}

.tfecha{
    font-size: 1.2rem;
}

.txtgr{
  font-size: 1.5rem;
  font-weight: 300;
  color: gray;
}

.txtmd{
  font-size: 1.2rem;
  color: gray;
}
.amarella{
  background-color: #fff159;
}

.logo1{
  height: 40px;
}

.textDesc{
    color: gray;
    font-size: 1rem;
}

.largo1{
  width: 500px;
}

.texts1{
  text-align: left;
}

.linksurl{
  color: cornflowerblue;
}

.verde{
  color: rgb(40, 202, 40);
}
</style>