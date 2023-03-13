<template>
    <div>
        <nav class="navbar bg-body-tertiary navegador">
            <div class="container-fluid">
                <a href="#"><img src="../assets/mercado-libre-logo.png" class="d-block logo" height="35" alt=""></a>
                <form class="d-flex w-50 p-0" role="search">
                    <input class="form-control buscador" type="search" placeholder="Buscar productos, marcas y más..."
                        aria-label="Search">
                    <button class="" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <a href="#"><img src="../assets/disney.png" class="d-block" height="35" alt=""></a>
            </div>
        </nav>

        <div class="nav-menu navegador w-100">
            <ul class="nav-menu-list">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <div class="d-flex pb-4" id="navbarNavDropdown">
                            <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path
                                        d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg></a>
                            <div style="text-align: left; font-size: 14px;">
                                <span class="nav-menu-cp-send">Enviar a {{ usuario }}</span><br>
                                <span class="nav-menu-link-cp"> CP {{ cp }}</span>
                            </div>
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
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"><i
                                        class="fa-regular fa-circle-user"></i> {{ usuario }} </a>
                                <ul class="dropdown-menu bg-dark despliega">
                                    <li><a class="dropdown-item text-white fonter" href="#">Mi cuenta</a></li>
                                    <li><a class="dropdown-item text-white fonter" href="#">Mis compras</a></li>
                                    <li><a class="dropdown-item text-white fonter" href="#">Mis puntos</a></li>
                                </ul>



                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Mis compras</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"> Favoritos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa-regular fa-bell"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['usuario','cp']
}
</script>

<style>
.navegador {
    background-color: #fff159;
}

.buscador {
    border-radius: 5px 0 0 5px;
}

.fonter:hover {
    background-color: #3483fa;
}

.logo {
    margin-left: 3rem;
}

.despliega {
    width: 15rem;
}

li {
    font-size: 14px;
}

.segundo {
    margin-left: 25%;
}
</style>