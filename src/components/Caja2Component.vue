<template>
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

        <div class="caja2 d-flex">
            <div>
                <svg class="icon-full" style="width:20%; margin-left:-2rem;" viewBox="0 0 41 13"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="nonzero" fill="#00A650"
                        d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z">
                    </path>
                </svg><span>&nbsp; Te da envío gratis </span>
                <div style="text-align: left;">
                    <span class="col" style="display: inline-block; font-size: 13px; color:rgb(0,0,0,.6)">En
                        carritos
                        desde $ {{ preciodesde }}</span>
                </div>
            </div>
            <div class="boton2">
                <input type="checkbox" id="btn-switchh">
                <label for="btn-switchh" class="lbl-switchh"></label>
            </div>
        </div>

        <div class="caja1 d-flex">
            <div>
                <span class="position-absolute">Envio gratis</span>
            </div>
            <div class="boton1" style="margin-left: 77.5%;">
                <input type="checkbox" id="btn-switchc">
                <label for="btn-switchc" class="lbl-switchc"></label>
            </div>
        </div>

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
</template>

<script>
export default {
    props: ['preciodesde']
}
</script>

<style>
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

</style>