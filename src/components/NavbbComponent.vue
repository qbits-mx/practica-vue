<template>

<body>
    <header class="header">
            <div class="btn-menu">
                <label for="btn-menu">
                    Mercado Libre
                </label>
            </div>
</header>
 
<!--creacion de la capa del menu-->
<div class="capa"></div>



<!--creacion de menu flotante-->
<input type="checkbox" id="btn-menu">

    <header class="header">
            <div class="btn-menu">
                <label for="btn-menu">
                    Mercado Libre
                </label>
            </div>
</header>

<div class="container-menu">
    <div class="cont-menu">
        <nav>
            <a href="#">servicios</a>    
            <a href="#">portafolio</a>    
            <a href="#">suscripcion</a>    
            <a href="#">youtube</a>    
            <a href="#">instagram</a>    
            <a href="#">facebook</a>    
        </nav>
        <label for="btn-menu">
            ♪
        </label>
    </div>
</div>
</body>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;

}

.capa{
    position:fixed;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    z-index: -1;

}
/*estilos para encabezados*/
.header{
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
}
.container{
    max-width: 1200px;
    width: 90%;
    margin:auto;

}

.container .btn-menu, .logo{
    float: left;
    line-height: 100px;
}
.container .btn-menu label{
    color: #fff;
    font-size: 25px;
    cursor: pointer;
}
.logo h1{
    color: rgb(224, 220, 220);
    font-weight: 400;
    font-size: 22px;
    margin-left: 10px;

}
.container .menu {
    float: right;
    line-height: 100px;
}
.container .menu a {
    display: inline-block;
    padding: 15px;
    line-height: normal;
    text-decoration: none;
    color: rgb(216, 212, 212);/*diferentes colores */
    transition: all 0.3s ease;/*da un cierto tiempo de trancision para dar el cambio*/
    border-bottom:  2px solid transparent;
    font-size: 15px;
    margin-right: 5px;

}
.container .menu a:hover {
    border-bottom: 2px solid #c7c7c7;
    padding-bottom: 5px;
}
/*finn de estilos encabezados*/

/*menu lateral*/
#btn-menu{
    display: none;

}
.container-menu {
    position: absolute;
    background: rgb(0, 0, 0.6);
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    transition: all 500ms ease;
    opacity: 0;
    visibility: hidden;
}
#btn-menu:checked ~ .container-menu {
    opacity: 1 ;
    visibility: visible;

}
.cont-menu {
    width: 100%;
    max-width: 250px;
    background: #1c1c1c;
    height:  100vh;
    position: relative;
    transition: all 500ms ease;
    transform:  translate(-100%);
}
#btn-menu:checked ~ .container-menu .cont-menu {
    transform: translateX(0%);
}
.cont-menu nav {
    transform: translateY(15%);

}
.cont-menu nav a {
    display: block;
    text-decoration: none;
    padding: 20px;
    color: #c7c7c7;
    border-left: 5px solid transparent;
    transition: all 400ms ease; 
}
.cont-menu nav a:hover {
    border-left: 5px solid #c7c7c7;
    background: #1f1f1f;
    color: magenta;
}
.cont-menu label {
    position: absolute;
    right: 5px;
    top: 10px;
    color: #fff;
    cursor: pointer ;
    font-size: 50px;
}



</style>