<template>
    <div class=" px-5 pt-4 texts1">
        <div class="card shadow-sm w-75">
            <div class="row g-0 border d-flex align-items-center">
                <p class="px-4 py-2 my-auto tfecha"><strong>{{ elemento.fechaCompra }}</strong></p>
            </div>
            <div class="row g-0">
                <div class="col-md-3 m-0">
                    <img :src=url+elemento.img alt="..." class="img-fluid rounded-start p-5 w-auto">
                </div>
                <div class="col-md-4 d-flex align-items-center">
                    <div>
                        <p class="verde m-0">{{ elemento.statusEnvio }}</p>
                        <p class="mt-1">{{ elemento.llegoStatus }} el {{ elemento.statusDeEntrega }}</p>
                        <p class="textDesc">{{ elemento.descripcion }} <br>
                            {{ elemento.unidadesTotal }} unidades
                        </p>
                    </div>
                </div>
                <div class="col-md-2 d-flex align-items-center">
                    <div>
                        <p class="textDesc m-0">{{ elemento.vendedor }}</p>
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
</template>

<script>
export default{
    props: ['elemento','url']
}
</script>