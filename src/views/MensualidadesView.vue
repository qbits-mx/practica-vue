<template>
    
  <nav class="navbar navbar-expand-lg bg-body-tertiary navigation">
    <div class="container-fluid">
      <a class=" navbar-brand" href="#"><img class="logo" src="@/assets/mercado.png" alt=""></a>
      <button class="navbar-toggler boton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-5 mb-lg-0">
          <li class="nav-item">
            <p class="nav-link active text-end " aria-current="page" href="#">ayuda</p>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  <h3 class="titulo">¿En cuantas mensualidades?</h3>
          
  <div class="container">
    <div class="row">
      <div class="col-7">
         <div>
      <ul class="list-group list-group-flush align-items-md-start rounded">
          <li class="form-check list-group-item alto3 ">
              <label class="form-check-label mensu" for="flexRadioDefault1"> Citybanamex ****4493 </label>
              <a class="active mensu3" aria-current="page" href="#">Modificar</a>
          </li>
      </ul>
            <ul class="list-group list-group-flush rounded">
                 <li class="list-group-item alto2">
                    <input class="form-check-input mensu_radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label mensu" for="flexRadioDefault1"> 1x $ 278 </label>
                 </li>
                 <li class="list-group-item alto">
                    <input class="form-check-input mensu_radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label mensu" for="flexRadioDefault1"> 3x $ 92.66</label>
                    <p>Sin intereses</p>
                 </li>
                 <li class="list-group-item alto">
                    <input class="form-check-input mensu_radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label mensu" for="flexRadioDefault1"> 6x $ 48.38 </label>
                    <p>290.28</p> 
                  </li>
                 <li class="list-group-item alto">
                    <input class="form-check-input mensu_radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label mensu" for="flexRadioDefault1"> 9x $ 33.64</label>
                    <p>302.82</p>
                  </li>
                 <li class="list-group-item alto">
                    <input class="form-check-input mensu_radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label mensu" for="flexRadioDefault1"> 12x $ 26.39</label>
                    <p>316.69</p>
                  </li>
                 <li class="list-group-item alto">
                  <input class="form-check-input mensu_radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label mensu" for="flexRadioDefault1"> 18x $ 18.93 </label>
                    <p>340.82</p>
                 </li>
                 <li class="list-group-item alto">
                    <input class="form-check-input mensu_radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label mensu" for="flexRadioDefault1"> 24x $ 15.39</label>
                    <p class="mensu2">369.48</p>
               </li>
            </ul>
          </div>
        </div>
      <div class="col-2">
          <div class="datos">
             <div class="card-body">
               <h5 class="card-title"></h5>
               <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
         </div>
      </div>   
    </div>
  </div>
  <div>
     <button type="button" class="btn btn-primary boton">Continuar</button>
  </div>
  <footer class="footer">
    <ul class="nav">
      <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Trabaja con nosotros</a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Terminos y condiciones</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Cómo cuidamos tu privacidad</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Accesibilidad</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Ayuda</a>
    </li>
  </ul>
      <p>    Copyright © 1999-2023 el presente canal de intruccion o ambiente es operada por DeRemate.Com de México bajo la marca comercial "Mercado Libre"<br>
             Insurgentes Sur 1602 Piso 9 Suite 900,Credito Constructor Benito Juarez, 03940 ciudad de México, Cdmx, México.</p>
  </footer>
  </template>
  <script>
  </script>  
  <style>
  .navigation{
    background-color: #eddf07;
  }
  .logo{
    width: 150px;
    height: 38px;
  }
  .ayuda{
    text-align: right;
  }
  .back{
    background-color: white;
    margin-top: 60px;
  }
  .alto{
      width: 650px;
      height: 94px;
  }
  .alto2{
      margin-top: 20px;
      width: 650px;
      height: 94px;
  }
  .alto3{
      margin-top: 50px;
      width: 650px;
      height: 94px;
      background-color: rgb(247, 246, 246);
  }
  .titulo{
  margin-top: 60px;
  margin-right: 45rem;
  width: 500px;
  }
  .datos{
      width: 414px;
      margin-top: -102px;
      margin-left: 10px;
      background-color: rgb(247, 246, 246);
      height: 1000px;
  }
  .datos2{
      margin-top: -102px;
      margin-left: 10px;
      background-color: rgb(247, 246, 246);  
  }
  .boton{
      margin-top: 0px;
  }
  .mensu{
     margin-top: 35px;
     margin-right: -260px;
  }
  .mensu2{
     margin-bottom: 35px;
     margin-inline-end: 10px;
  }
  .mensu3{
    margin-top: 35px;
    margin-inline-start: 600px;
  }
  .mensu_radio{
    margin-top: 35px;
     margin-inline-start: -800px;
  }
  .footer{
    background-color: aliceblue;
    font-size: 8px;
    margin-top: 50px;
    text-align: left;
  }
  </style>