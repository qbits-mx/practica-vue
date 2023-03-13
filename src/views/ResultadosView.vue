<template>
  <div>
    <div>
      <!--  navbar  -->
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
      <!-- body -->
      <main class="fondo">
        <div class="container d-flex">
          <div>
            <div class="container-fluid pt-3">
              <div>
                <h1 style="text-align: left;">{{ producto }}</h1>
              </div>
              <div style="text-align: left; margin-top: -1.5rem; margin-left: 1rem;" class="cantidad">
                <span>{{ cantidadpro }} resultados</span>
              </div>
            </div>
            <!-- cajas -->
            <form class="forma2 pt-4">
              <div class="pt-3">
                <div class="caja1 d-flex">
                  <div>
                    <span class="position-absolute">Llega hoy</span>
                  </div>
                  <div class="boton1" style="margin-left: 77.5%;">
                    <input type="checkbox" id="btn-switch">
                    <label for="btn-switch" class="lbl-switch"></label>
                  </div>
                </div>
              </div>

              <div class="pt-4">
                <div class="caja2 d-flex">
                  <div>
                    <svg class="icon-full" style="width:20%; margin-left:-2rem;" viewBox="0 0 41 13"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="nonzero" fill="#00A650"
                        d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z">
                      </path>
                    </svg><span>&nbsp; Te da envío gratis </span>
                    <div style="text-align: left;">
                      <span class="col" style="display: inline-block; font-size: 13px; color:rgb(0,0,0,.6)">En carritos
                        desde
                        $ {{ preciodesde }}</span>
                    </div>
                  </div>
                  <div class="boton2">
                    <input type="checkbox" id="btn-switchh">
                    <label for="btn-switchh" class="lbl-switchh"></label>
                  </div>
                </div>
              </div>

              <div class="pt-4">
                <div class="caja1 d-flex">
                  <div>
                    <span class="position-absolute">Envio gratis</span>
                  </div>
                  <div class="boton1" style="margin-left: 77.5%;">
                    <input type="checkbox" id="btn-switchc">
                    <label for="btn-switchc" class="lbl-switchc"></label>
                  </div>
                </div>
              </div>

              <div class="pt-4">
                <div class="caja2 d-flex">
                  <div>
                    <div style="text-align: left;">
                      <svg class="ui-search-icon ui-search-icon--international-filter-cbt" width="156" height="16"
                        viewBox="0 0 156 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.00019" cy="8.00019" r="7.1" stroke="#1F4E96" stroke-width="1.4"></circle>
                        <path
                          d="M2.38083 3.22679C2.58026 4.1877 3.79511 6.49183 4.71976 7.79722C5.15489 11.0063 6.78987 12.982 6.78987 12.982C7.77304 13.3164 8.75751 9.41797 8.7991 8.28674C8.85349 6.60061 6.42402 7.45274 5.15489 7.68844C4.88294 7.36209 4.90469 6.209 5.64441 5.51279C6.56906 4.64253 9.80241 1.53423 9.20411 0.827148"
                          stroke="#1F4E96" stroke-width="1.4" stroke-linejoin="round">
                        </path>
                        <path
                          d="M13.1512 2.57544C12.4622 3.22813 11.2692 4.91425 12.009 6.43721C12.7487 7.96017 14.4928 9.39247 15.2724 9.91825"
                          stroke="#1F4E96" stroke-width="1.4"></path>
                        <path
                          d="M24.092 11.632C25.049 11.632 26.27 11.291 27.117 10.213L25.907 9.399C25.489 9.916 24.807 10.246 24.18 10.246C22.915 10.246 22.123 9.388 22.123 8.244C22.123 6.627 23.289 5.428 24.675 5.428C25.522 5.428 26.226 5.846 26.512 6.627L28.008 6.121C27.579 5.01 26.545 4.042 24.752 4.042C22.475 4.042 20.484 5.747 20.484 8.343C20.484 10.345 22.068 11.632 24.092 11.632ZM31.719 11.632C34.139 11.632 35.987 9.718 35.987 7.32C35.987 5.307 34.403 4.042 32.379 4.042C29.959 4.042 28.111 5.945 28.111 8.343C28.111 10.356 29.684 11.632 31.719 11.632ZM31.807 10.246C30.63 10.246 29.75 9.476 29.75 8.244C29.75 6.671 30.861 5.428 32.28 5.428C33.457 5.428 34.348 6.198 34.348 7.43C34.348 9.003 33.226 10.246 31.807 10.246ZM44.1231 11.5L45.7401 4.163H43.4851L40.6911 8.75L39.9211 4.163H37.7871L36.1701 11.5H37.7321L38.8981 6.209L39.8001 11.5H40.4821L43.7161 6.209L42.5501 11.5H44.1231ZM47.1422 11.5L47.7252 8.882H49.5622C51.8612 8.882 52.5982 7.287 52.5982 6.198C52.5982 5.087 51.7292 4.163 50.5522 4.163H47.1972L45.5802 11.5H47.1422ZM49.6502 7.507H48.0222L48.4622 5.538H50.0572C50.5962 5.538 50.9702 5.879 50.9702 6.363C50.9702 7.012 50.4422 7.507 49.6612 7.507H49.6502ZM58.4062 11.5L57.3832 8.783C58.5712 8.563 59.4732 7.551 59.4732 6.231C59.4732 4.955 58.3952 4.163 57.2072 4.163H54.0722L52.4552 11.5H54.0172L54.5892 8.893H55.7992L56.6682 11.5H58.4062ZM56.5252 7.518H54.8972L55.3372 5.538H56.9102C57.3942 5.538 57.8452 5.89 57.8452 6.385C57.8452 7.045 57.3502 7.518 56.5362 7.518H56.5252ZM66.3656 11.5L65.1556 4.163H63.1976L58.7536 11.5H60.6126L61.3386 10.257H64.4846L64.6716 11.5H66.3656ZM64.3636 8.882H62.0756L63.9126 5.725L64.3636 8.882ZM71.4303 11.5L73.0473 4.163H71.4853L69.8683 11.5H71.4303ZM79.4539 11.5L81.0709 4.163H79.5089L78.4639 8.838L76.1099 4.163H74.5039L72.8869 11.5H74.4489L75.5269 6.638L77.9469 11.5H79.4539ZM84.1676 11.5L85.4766 5.538H87.6216L87.9186 4.163H82.0666L81.7696 5.538H83.9146L82.5946 11.5H84.1676ZM92.4949 11.5L92.7919 10.125H89.1729L89.5359 8.453H93.0889L93.3859 7.078H89.8439L90.1849 5.538H93.8039L94.1119 4.163H88.9199L87.3029 11.5H92.4949ZM99.667 11.5L98.644 8.783C99.832 8.563 100.734 7.551 100.734 6.231C100.734 4.955 99.656 4.163 98.468 4.163H95.333L93.716 11.5H95.278L95.85 8.893H97.06L97.929 11.5H99.667ZM97.786 7.518H96.158L96.598 5.538H98.171C98.655 5.538 99.106 5.89 99.106 6.385C99.106 7.045 98.611 7.518 97.797 7.518H97.786ZM107.351 11.5L108.968 4.163H107.406L106.361 8.838L104.007 4.163H102.401L100.784 11.5H102.346L103.424 6.638L105.844 11.5H107.351ZM115.64 11.5L114.43 4.163H112.472L108.028 11.5H109.887L110.613 10.257H113.759L113.946 11.5H115.64ZM113.638 8.882H111.35L113.187 5.725L113.638 8.882ZM119.794 11.632C120.751 11.632 121.972 11.291 122.819 10.213L121.609 9.399C121.191 9.916 120.509 10.246 119.882 10.246C118.617 10.246 117.825 9.388 117.825 8.244C117.825 6.627 118.991 5.428 120.377 5.428C121.224 5.428 121.928 5.846 122.214 6.627L123.71 6.121C123.281 5.01 122.247 4.042 120.454 4.042C118.177 4.042 116.186 5.747 116.186 8.343C116.186 10.345 117.77 11.632 119.794 11.632ZM124.948 11.5L126.565 4.163H125.003L123.386 11.5H124.948ZM130.364 11.632C132.784 11.632 134.632 9.718 134.632 7.32C134.632 5.307 133.048 4.042 131.024 4.042C128.604 4.042 126.756 5.945 126.756 8.343C126.756 10.356 128.329 11.632 130.364 11.632ZM130.452 10.246C129.275 10.246 128.395 9.476 128.395 8.244C128.395 6.671 129.506 5.428 130.925 5.428C132.102 5.428 132.993 6.198 132.993 7.43C132.993 9.003 131.871 10.246 130.452 10.246ZM141.383 11.5L143 4.163H141.438L140.393 8.838L138.039 4.163H136.433L134.816 11.5H136.378L137.456 6.638L139.876 11.5H141.383ZM149.671 11.5L148.461 4.163H146.503L142.059 11.5H143.918L144.644 10.257H147.79L147.977 11.5H149.671ZM147.669 8.882H145.381L147.218 5.725L147.669 8.882ZM154.958 11.5L155.255 10.125H152.153L153.473 4.163H151.9L150.283 11.5H154.958Z"
                          fill="#1F4E96"></path>
                      </svg>

                      <span class="col" style=" color:rgb(0,0,0,.7)">&nbsp; Miles de produtos del</span>
                      <span class="col" style="display: inline-block; font-size: 14px; color:rgb(0,0,0,.7)">mundo a tu
                        casa</span>
                    </div>
                  </div>
                  <div class="boton2">
                    <input type="checkbox" id="btn-switchx">
                    <label for="btn-switchx" class="lbl-switchx"></label>
                  </div>
                </div>
              </div>

              <div>
                <div style="text-align: left; padding-top: 2rem;">
                  <div>Tiendas Oficiales</div>
                  <a href="#" style="color: rgb(0,0,0,.7); font-size: 14px;">{{ tiendas1 }}: </a><span
                    style="color: rgb(0,0,0,.5); font-size: 14px;">{{ toficial }}</span>
                </div>
              </div>

              <div>
                <div style="text-align: left; padding-top: 2rem;">
                  <div>Categorias</div>
                  <!--<div>
                <a class="col" v-for="(Categorias1, ccategorias1, index) in Categorias1" v-bind:key="index" href="#" style="color: rgb(0,0,0,.7); font-size: 14px;">{{ Categorias1 }} : {{ ccategorias1 }}</a><span class="col" v-for="(ccategorias1, index) in ccategorias1" v-bind:key="index" style="color: rgb(0,0,0,.5); font-size: 14px;">{{ ccategorias1 }}</span> <br>
                </div>-->
                  <a href="#" style="color: rgb(0,0,0,.6); font-size: 14px;">{{ Categorias1 }}: </a><span
                    style="color: rgb(0,0,0,.5); font-size: 14px;">({{ ccategorias1 }})</span><br>
                  <a href="#" style="color: rgb(0,0,0,.6); font-size: 14px;">{{ Categorias2 }}: </a><span
                    style="color: rgb(0,0,0,.5); font-size: 14px;">({{ ccategorias2 }})</span><br>
                  <a href="#" style="color: rgb(0,0,0,.6); font-size: 14px;">{{ Categorias3 }}: </a><span
                    style="color: rgb(0,0,0,.5); font-size: 14px;">({{ ccategorias3 }})</span><br>
                  <a href="#" style="color: rgb(0,0,0,.6); font-size: 14px;">{{ Categorias4 }}: </a><span
                    style="color: rgb(0,0,0,.5); font-size: 14px;">({{ ccategorias4 }})</span><br>
                  <a href="#" style="color: rgb(0,0,0,.6); font-size: 14px;">{{ Categorias5 }}: </a><span
                    style="color: rgb(0,0,0,.5); font-size: 14px;">({{ ccategorias5 }})</span><br>
                  <a href="#" style="color: rgb(0,0,0,.6); font-size: 14px;">{{ Categorias6 }}: </a><span
                    style="color: rgb(0,0,0,.5); font-size: 14px;">({{ ccategorias6 }})</span><br>
                  <a href="#" style="color: rgb(0,0,0,.6); font-size: 14px;">{{ Categorias7 }}: </a><span
                    style="color: rgb(0,0,0,.5); font-size: 14px;">({{ ccategorias7 }})</span><br>
                  <a href="#" style="color: rgb(0,0,0,.6); font-size: 14px;">{{ Categorias8 }}: </a><span
                    style="color: rgb(0,0,0,.5); font-size: 14px;">({{ ccategorias8 }})</span><br>
                  <a href="#" style="color: rgb(0,0,0,.6); font-size: 14px;">{{ Categorias9 }}: </a><span
                    style="color: rgb(0,0,0,.5); font-size: 14px;">({{ ccategorias9 }})</span><br>
                  <a href="#" style="color: #3483fa; font-size: 14px;">{{ Categorias10 }} </a>

                </div>

                <div>
                  <div style="text-align: left; padding-top: 2rem;">
                    <div>Costo de envío</div>
                    <a href="#" style="color: rgb(0,0,0,.7); font-size: 14px;">{{ costoenv }}: </a><span
                      style="color: rgb(0,0,0,.5); font-size: 14px;">{{ totalcostoenv }}</span>
                  </div>
                </div>
              </div>

              <div>
                <div style="text-align: left; padding-top: 2rem;">
                  <div>Tiempo de entrega</div>
                  <a href="#" style="color: rgb(0,0,0,.7); font-size: 14px;">{{ tiempoentre1 }}: </a><span
                    style="color: rgb(0,0,0,.5); font-size: 14px;">({{ ctiempoentre1 }})</span><br>
                  <a href="#" style="color: rgb(0,0,0,.7); font-size: 14px;">{{ tiempoentre2 }}: </a><span
                    style="color: rgb(0,0,0,.5); font-size: 14px;">({{ ctiempoentre2 }})</span>
                </div>
              </div>
            </form>
          </div>
          <div>
            <form class="mt-5 pt-5">
              <div style="padding-left: 70%;">
                <li class="nav-item dropdown" style="list-style-type: none;">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Ordenar por {{ ordenar.orden1 }}
                  </a>
                  <ul class="dropdown-menu bg-dark">
                    <li><a class="dropdown-item text-white fonter" href="#">{{ ordenar.orden1 }}</a></li>
                    <li><a class="dropdown-item text-white fonter" href="#">{{ ordenar.orden2 }}</a></li>
                    <li><a class="dropdown-item text-white fonter" href="#">{{ ordenar.orden3 }}</a></li>
                  </ul>
                </li>
              </div>
              <div>
                <div class="container-fluid pt-4 pb-5 grid ultimo">
                  
                  <div class="card" style="width: 15rem;">
                    <img :src=img1 class="card-img-top" alt="...">
                    <div class="card-body">
                      <h2 class="card-title"
                        style="color: #333; font-size: 14px; text-align: left; font-weight:  400; max-height: 36px;">{{
                          producto1.nombre }}</h2>
                      <p class="card-text"
                        style="color: #666; text-align: left; margin-top: 1rem; font-size: 12px; font-weight: 300; line-height: 1;">
                        {{
                          producto1.vendedor }}</p>

                      <span class="card-text" style="color: #999; display: flex; text-align: left; font-size: 12px;">${{
                        producto1.descuento }}</span>
                      <span class="card-text"
                        style="color: #333; display: flex; font-size: 24px; font-weight: 400; line-height: 1;">${{
                          producto1.precio }}&nbsp; <p
                          style="color: #00a650; font-size: 14px; font-weight: 400; line-height: 1;"> {{ producto1.desc }}
                          % OFF</p></span>
                      <span class="card-text" style="color: #000; display: flex; font-size: 14px;">en &nbsp;<p
                          style="color: #00a650;">{{ producto1.meses }}x $ {{ producto1.mensu }} {{ producto1.interes }}
                        </p>
                      </span>

                      <div class="d-flex">
                        <p style="color:#00a650; font-size: 14px; font-weight: 400;">{{producto1.envio}}</p>
                          &nbsp;
                          <svg class="icono" viewBox="0 0 41 26"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="nonzero" fill="#00A650"
                              d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z">
                            </path>
                          </svg>
                        
                      </div>
                      <div style="text-align: right;">
                        <span style="color: #3483fa; text-align: right; font-size: 12px;">Promocionado</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="card" style="width: 15rem;">
                    <img :src=pro1 class="card-img-top" alt="...">
                    <div class="card-body">
                      <h2 class="card-title"
                        style="color: #333; font-size: 14px; text-align: left; font-weight:  400; max-height: 36px;">{{
                          producto2.nombre }}</h2>
                      <p class="card-text"
                        style="color: #666; text-align: left; margin-top: 1rem; font-size: 12px; font-weight: 300; line-height: 1;">
                        {{
                          producto2.vendedor }}</p>

                      <span class="card-text" style="color: #999; display: flex; text-align: left; font-size: 12px;">${{
                        producto2.descuento }}</span>
                      <span class="card-text"
                        style="color: #333; display: flex; font-size: 24px; font-weight: 400; line-height: 1;">${{
                          producto2.precio }}&nbsp; <p
                          style="color: #00a650; font-size: 14px; font-weight: 400; line-height: 1;"> {{ producto2.desc }}
                          % OFF</p></span>
                      <span class="card-text" style="color: #000; display: flex; font-size: 14px;">en &nbsp;<p
                          style="color: #00a650;">{{ producto2.meses }}x $ {{ producto2.mensu }} {{ producto2.interes }}
                        </p>
                      </span>

                      <div class="d-flex">
                        <p style="color:#00a650; font-size: 14px; font-weight: 400;">{{producto2.envio}}</p>
                          &nbsp;
                          <svg class="icono" viewBox="0 0 41 26"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="nonzero" fill="#00A650"
                              d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z">
                            </path>
                          </svg>
                        
                      </div>
                      <div style="text-align: right;">
                        <span style="color: #3483fa; text-align: right; font-size: 12px;">Promocionado</span>
                      </div>
                    </div>
                  </div>

                  <div class="card" style="width: 15rem;">
                    <img :src=pro1 class="card-img-top" alt="...">
                    <div class="card-body">
                      <h2 class="card-title"
                        style="color: #333; font-size: 14px; text-align: left; font-weight:  400; max-height: 36px;">{{
                          producto3.nombre }}</h2>
                      <p class="card-text"
                        style="color: #666; text-align: left; margin-top: 1rem; font-size: 12px; font-weight: 300; line-height: 1;">
                        {{
                          producto3.vendedor }}</p>

                      <span class="card-text" style="color: #999; display: flex; text-align: left; font-size: 12px;">${{
                        producto3.descuento }}</span>
                      <span class="card-text"
                        style="color: #333; display: flex; font-size: 24px; font-weight: 400; line-height: 1;">${{
                          producto3.precio }}&nbsp; <p
                          style="color: #00a650; font-size: 14px; font-weight: 400; line-height: 1;"> {{ producto3.desc }}
                          % OFF</p></span>
                      <span class="card-text" style="color: #000; display: flex; font-size: 14px;">en &nbsp;<p
                          style="color: #00a650;">{{ producto3.meses }}x $ {{ producto3.mensu }} {{ producto3.interes }}
                        </p>
                      </span>

                      <div class="d-flex">
                        <p style="color:#00a650; font-size: 14px; font-weight: 400;">{{producto3.envio}}</p>
                          &nbsp;
                          <svg class="icono" viewBox="0 0 41 26"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="nonzero" fill="#00A650"
                              d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z">
                            </path>
                          </svg>
                        
                      </div>
                      <div style="text-align: right;">
                        <span style="color: #3483fa; text-align: right; font-size: 12px;">Promocionado</span>
                      </div>
                    </div>
                  </div>
                
                  
                  <div class="card" style="width: 15rem;">
                    <img :src=pro1 class="card-img-top" alt="...">
                    <div class="card-body">
                      <h2 class="card-title"
                        style="color: #333; font-size: 14px; text-align: left; font-weight:  400; max-height: 36px;">{{
                          producto4.nombre }}</h2>
                      <p class="card-text"
                        style="color: #666; text-align: left; margin-top: 1rem; font-size: 12px; font-weight: 300; line-height: 1;">
                        {{
                          producto4.vendedor }}</p>

                      <span class="card-text" style="color: #999; display: flex; text-align: left; font-size: 12px;">${{
                        producto4.descuento }}</span>
                      <span class="card-text"
                        style="color: #333; display: flex; font-size: 24px; font-weight: 400; line-height: 1;">${{
                          producto4.precio }}&nbsp; <p
                          style="color: #00a650; font-size: 14px; font-weight: 400; line-height: 1;"> {{ producto4.desc }}
                          % OFF</p></span>
                      <span class="card-text" style="color: #000; display: flex; font-size: 14px;">en &nbsp;<p
                          style="color: #00a650;">{{ producto4.meses }}x $ {{ producto4.mensu }} {{ producto4.interes }}
                        </p>
                      </span>

                      <div class="d-flex">
                        <p style="color:#00a650; font-size: 14px; font-weight: 400;">{{producto4.envio}}</p>
                          &nbsp;
                          <svg class="icono" viewBox="0 0 41 26"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="nonzero" fill="#00A650"
                              d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z">
                            </path>
                          </svg>
                        
                      </div>
                      <div style="text-align: right;">
                        <span style="color: #3483fa; text-align: right; font-size: 12px;">Promocionado</span>
                      </div>
                    </div>
                  </div>

                  
                  <div class="card" style="width: 15rem;">
                    <img :src=pro1 class="card-img-top" alt="...">
                    <div class="card-body">
                      <h2 class="card-title"
                        style="color: #333; font-size: 14px; text-align: left; font-weight:  400; max-height: 36px;">{{
                          producto5.nombre }}</h2>
                      <p class="card-text"
                        style="color: #666; text-align: left; margin-top: 1rem; font-size: 12px; font-weight: 300; line-height: 1;">
                        {{
                          producto5.vendedor }}</p>

                      <span class="card-text" style="color: #999; display: flex; text-align: left; font-size: 12px;">${{
                        producto5.descuento }}</span>
                      <span class="card-text"
                        style="color: #333; display: flex; font-size: 24px; font-weight: 400; line-height: 1;">${{
                          producto5.precio }}&nbsp; <p
                          style="color: #00a650; font-size: 14px; font-weight: 400; line-height: 1;"> {{ producto5.desc }}
                          % OFF</p></span>
                      <span class="card-text" style="color: #000; display: flex; font-size: 14px;">en &nbsp;<p
                          style="color: #00a650;">{{ producto5.meses }}x $ {{ producto5.mensu }} {{ producto5.interes }}
                        </p>
                      </span>

                      <div class="d-flex">
                        <p style="color:#00a650; font-size: 14px; font-weight: 400;">{{producto5.envio}}</p>
                          &nbsp;
                          <svg class="icono" viewBox="0 0 41 26"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="nonzero" fill="#00A650"
                              d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z">
                            </path>
                          </svg>
                        
                      </div>
                      <div style="text-align: right;">
                        <span style="color: #3483fa; text-align: right; font-size: 12px;">Promocionado</span>
                      </div>
                    </div>
                  </div>

                  <div class="card" style="width: 15rem;">
                    <img :src=pro1 class="card-img-top" alt="...">
                    <div class="card-body">
                      <h2 class="card-title"
                        style="color: #333; font-size: 14px; text-align: left; font-weight:  400; max-height: 36px;">{{
                          producto6.nombre }}</h2>
                      <p class="card-text"
                        style="color: #666; text-align: left; margin-top: 1rem; font-size: 12px; font-weight: 300; line-height: 1;">
                        {{
                          producto6.vendedor }}</p>

                      <span class="card-text" style="color: #999; display: flex; text-align: left; font-size: 12px;">${{
                        producto6.descuento }}</span>
                      <span class="card-text"
                        style="color: #333; display: flex; font-size: 24px; font-weight: 400; line-height: 1;">${{
                          producto6.precio }}&nbsp; <p
                          style="color: #00a650; font-size: 14px; font-weight: 400; line-height: 1;"> {{ producto6.desc }}
                          % OFF</p></span>
                      <span class="card-text" style="color: #000; display: flex; font-size: 14px;">en &nbsp;<p
                          style="color: #00a650;">{{ producto6.meses }}x $ {{ producto6.mensu }} {{ producto6.interes }}
                        </p>
                      </span>

                      <div class="d-flex">
                        <p style="color:#00a650; font-size: 14px; font-weight: 400;">{{producto6.envio}}</p>
                          &nbsp;
                          <svg class="icono" viewBox="0 0 41 26"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="nonzero" fill="#00A650"
                              d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z">
                            </path>
                          </svg>
                        
                      </div>
                      <div style="text-align: right;">
                        <span style="color: #3483fa; text-align: right; font-size: 12px;">Promocionado</span>
                      </div>
                    </div>
                  
                  
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>



      <!-- body -->

    </div>
  </div>
  <!-- footer -->
  <footer>
    <div>
      <div>
        <ul class="navbar-nav footer">
          <li class="nav-item foot"><a href="#" class="nav-link">Trabaja con nosotros</a></li>
          <li class="nav-item foot"><a href="#" class="nav-link">Términos y condiciones</a></li>
          <li class="nav-item foot"><a href="#" class="nav-link">Cómo cuidamos tu privacidad</a></li>
          <li class="nav-item foot"><a href="#" class="nav-link">Accesibilidad</a></li>
          <li class="nav-item foot"><a href="#" class="nav-link">Ayuda</a></li>
        </ul>
      </div>
      <div class="fout" style="text-align: left;">
        <p class="pt-1">Copyright ©&nbsp;1999-2023 El presente canal de instrucción o ambiente, es operado por
          DeRemate.Com de México, S. de R.L. de C.V. identificada bajo la marca comercial "Mercado Libre".</p>
        <p style="margin-top: -.5rem;">Insurgentes Sur 1602 Piso 9 Suite 900, Crédito Constructor Benito
          Juarez, 03940 Ciudad de México, CDMX, Mexico</p>
      </div>
    </div>
  </footer>
  <!-- footer -->
</template>
  
<script>


import axios from 'axios';
import info from './ResultadosView.json';
const inicio = 'http://127.0.0.1/'

export default {
  data: function () {
    return {
      usuario: info.usuario,
      producto: info.producto,
      cantidadpro: info.cantidadpro,
      preciodesde: info.preciodesde,
      cp: info.cp,
      tiendas1: info.tiendas1,
      toficial: info.toficial,
      /*Categorias1: info.Categorias1,
      ccategorias1: info.ccategorias1,
      Categoria2: info.Categoria2,
      ccategoria2: info.ccategoria2,*/
      Categorias1: info.Categorias1,
      Categorias2: info.Categorias2,
      Categorias3: info.Categorias3,
      Categorias4: info.Categorias4,
      Categorias5: info.Categorias5,
      Categorias6: info.Categorias6,
      Categorias7: info.Categorias7,
      Categorias8: info.Categorias8,
      Categorias9: info.Categorias9,
      Categorias10: info.Categorias10,
      ccategorias1: info.ccategorias1,
      ccategorias2: info.ccategorias2,
      ccategorias3: info.ccategorias3,
      ccategorias4: info.ccategorias4,
      ccategorias5: info.ccategorias5,
      ccategorias6: info.ccategorias6,
      ccategorias7: info.ccategorias7,
      ccategorias8: info.ccategorias8,
      ccategorias9: info.ccategorias9,
      ccategorias10: info.ccategorias10,
      costoenv: info.costoenv,
      totalcostoenv: info.totalcostoenv,
      tiempoentre1: info.tiempoentre1,
      tiempoentre2: info.tiempoentre2,
      ctiempoentre1: info.ctiempoentre1,
      ctiempoentre2: info.ctiempoentre2,
      ordenar: info.ordenar,
      producto1: info.producto1,
      producto2: info.producto2,
      producto3: info.producto3,
      producto4: info.producto4,
      producto5: info.producto5,
      producto6: info.producto6,
      imagen: info.imagen,

      

      caruselActivo: "carousel-item active",
      caruselInactivo: "carousel-item",


      imgs: [inicio + 'proteus1.jpg', inicio + 'proteus2.jpg', inicio + 'proteus3.jpg'],
      img1: inicio + 'proteus4.jpg',
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
.navegador {
  background-color: #fff159;
}

.pagina {
  display: table-row;
  width: 100%;
}

.fondo {
  width: 100%;
  height: 100%;
  background-color: rgb(238, 238, 238);
  color: black;
  margin-top: -2rem;

}

h1 {
  word-wrap: break-word;
  color: #333;
  display: block;
  font-size: 26px;
  font-weight: 500;
  line-height: 30px;
  padding-right: 16px;
  position: relative;
  z-index: 1;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.cantidad {
  bottom: 2px;
  color: #525252;
  font-size: 14px;
  font-weight: 100;
  line-height: 1.29;
  position: relative;
  width: max-content;
}

.footer {
  display: flex;
  flex-direction: row;
}

.foot {
  padding-left: 2rem;
  padding-top: 1rem;
  font-size: 13px;
  color: #333;
}

.fout {
  font-size: 12px;
  padding-left: 2rem;
  color: #999;
  vertical-align: initial;
  width: auto;
  line-height: initial;
  margin: 0;
  padding-bottom: 2px;
}

.forma2 {
  width: 100%;
  margin-left: 2.5%;
}

.caja1 {
  width: 100%;
  font-size: 14px;
  padding: 1rem;
  background: #ffff;
  border-radius: 5px;
}

.caja2 {
  font-size: 14px;
  width: 100%;
  border-radius: 5px;
  padding: 1rem;
  background: #ffff;
}

.boton1 {
  margin-top: 3%;

}

.boton2 {
  margin-top: 3%;

}

.lbl-switch {
  background: #aaa;
  width: 55px;
  height: 30px;
  border-radius: 100px;
  position: relative;
}

#btn-switch:checked~.lbl-switch {
  background: #61A0FF;
}

.lbl-switch::after {
  position: absolute;
  content: '';
  width: 22px;
  height: 22px;
  background: #ffff;
  border-radius: 100px;
  top: 4px;
  left: 5px;
  transition: 0.3s;
}

#btn-switch:checked~.lbl-switch::after {
  left: 28px;
}

#btn-switch {
  display: none;
}

.lbl-switchc {
  background: #aaa;
  width: 55px;
  height: 30px;
  border-radius: 100px;
  position: relative;
}

#btn-switchc:checked~.lbl-switchc {
  background: #61A0FF;
}

.lbl-switchc::after {
  position: absolute;
  content: '';
  width: 22px;
  height: 22px;
  background: #ffff;
  border-radius: 100px;
  top: 4px;
  left: 5px;
  transition: 0.3s;
}

#btn-switchc:checked~.lbl-switchc::after {
  left: 28px;
}

#btn-switchc {
  display: none;
}

.lbl-switchh {
  background: #aaa;
  width: 55px;
  height: 30px;
  border-radius: 100px;
  position: relative;
}

#btn-switchh:checked~.lbl-switchh {
  background: #61A0FF;
}

.lbl-switchh::after {
  position: absolute;
  content: '';
  width: 22px;
  height: 22px;
  background: #ffff;
  border-radius: 100px;
  top: 4px;
  left: 5px;
  transition: 0.3s;
}

#btn-switchh:checked~.lbl-switchh::after {
  left: 28px;
}

#btn-switchh {
  display: none;
}

.lbl-switchx {
  background: #aaa;
  width: 55px;
  height: 30px;
  border-radius: 100px;
  position: relative;
}

#btn-switchx:checked~.lbl-switchx {
  background: #61A0FF;
}

.lbl-switchx::after {
  position: absolute;
  content: '';
  width: 22px;
  height: 22px;
  background: #ffff;
  border-radius: 100px;
  top: 4px;
  left: 5px;
  transition: 0.3s;
}

#btn-switchx:checked~.lbl-switchx::after {
  left: 28px;
}

#btn-switchx {
  display: none;
}

a {
  text-decoration: none;
}
.icono{
  width: 25%;
}
.grid{
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: auto;
  gap: 2rem;
}
</style>
  