<template>
    <div class="row gap-3">
        <div class="col col-auto px-0" v-for="productos in data" v-bind:key="productos.id">
            <div>
                <div class="card " style="width: 15rem;">
                    <div class="">
                        <img style="height: 200px;" :src=inicio2+productos.img class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <h2 class="card-title fuente alinea" style="color: #333; max-height: 36px;">{{ productos.nombre }}
                        </h2>
                        <p class="card-text alinea"
                            style="color: #666; margin-top: 1rem; font-size: 12px; font-weight: 300; line-height: 1;">
                            {{ productos.vendedor }}</p>
                        <span class="card-text alinea" style="color: #999; display: flex; font-size: 12px;">${{
                            productos.descuento }}</span>
                        <span class="card-text"
                            style="color: #333; display: flex; font-size: 24px; font-weight: 400; line-height: 1;">${{
                                productos.precio }}&nbsp;<p class="fuente" style="color: #00a650;line-height: 1;">
                                {{ productos.desc }}% OFF</p></span>
                        <span class="card-text fuente" style="color: #000; display: flex; ">en &nbsp;<p
                                style="color: #00a650;">
                                {{ productos.meses }}x $ {{ productos.mensu }} {{ productos.interes
                                }}
                            </p>
                        </span>

                        <div class="d-flex">
                            <p class="fuente" style="color:#00a650;">{{ productos.envio }}</p>
                            &nbsp;
                            <svg class="icono" viewBox="0 0 41 26" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="nonzero" fill="#00A650"
                                    d="M2.628 0h5.255L5.255 4.643h4.38L2.628 13l1.751-5.571H0L2.628 0zm11.589 9.533h-1.959l1.674-7.515H19.5l-.376 1.69h-3.61l-.25 1.172h3.519l-.376 1.69h-3.53l-.66 2.963zm9.468.136c-2.334 0-3.484-1.105-3.484-2.682 0-.124.034-.383.057-.496l1.002-4.473h1.992l-.99 4.428c-.012.057-.034.18-.034.316.011.62.49 1.217 1.457 1.217 1.048 0 1.583-.654 1.776-1.533l.991-4.428h1.981l-.99 4.462c-.41 1.825-1.412 3.189-3.758 3.189zm10.118-.136h-5.01l1.673-7.515h1.959l-1.287 5.825h3.04l-.375 1.69zm6.678 0h-5.01l1.674-7.515h1.959l-1.287 5.825h3.04l-.376 1.69z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <span class="promocion">Promocionado</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data', 'inicio2']
}
</script>

<style>
a {
  text-decoration: none;
}

.icono {
  width: 25%;
}

/* card */
.fuente {
  font-size: 14px;
  font-weight: 400;
}

.alinea {
  text-align: left;
}

.promocion {
  text-align: right;
  color: #3483fa;
  text-align: right;
  font-size: 12px;
}
</style>