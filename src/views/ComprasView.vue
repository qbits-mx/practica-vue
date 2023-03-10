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
    </div>
</template>
<script>
const  inicio =  'http://127.0.0.1/';
export default {
    data: function () {
        return {
            inicio2: inicio,
            img1: "merca04.png",
            img2: "merca02.png",
            img3: "merca03.png",
            img4: "05.png",
        }
    }
}
</script>
<style scoped>
.precios {
  font-size: 2.5rem;
}

.red1{
  color: rgb(170, 48, 11);
}

.verde{
  color: rgb(40, 202, 40);
}
.ancho{
  margin: auto;
  text-align: center;
  width: 400px;
}

.naranja{
  background-color: orange;
  width: fit-content;
  border-radius: 5px;
  color: white;
  font-weight: 600;
}
.amarella{
  background-color: #fff159;
}

.logo1{
  height: 40px;
}

.largo1{
  width: 500px;
}

.body1{
  width: 65%;
}

.texts{
  font-size: .8rem;
  text-align: left;
}

h5{
  font-weight: 600;
  font-size: 1.5rem;
}

.texts1{
  text-align: left;
}

.oscuro{
  font-size: .7rem;
  color: gray;
}

.linksurl{
  color: cornflowerblue;
}

.ajusta{
  overflow: auto;
}

.scroll{
  min-width:388px;
  position: relative;
  margin-top: 0%;
  border-radius: 8px;
  display: flex;
  height: 92px;
  z-index: 1;
  margin-left: 2%;
  object-fit: cover;
}
</style>