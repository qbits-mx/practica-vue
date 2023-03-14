<template>
    <h2 class="vendedor" style="text-align: left;">Publicaciones del vendedor</h2>
    <div class="row gap-3">
        <div style="width: 15rem;" class="col-auto px-0  card-group tarjetas" v-for="caracteristicas in data"
            v-bind:key="caracteristicas.id">
            <div class="card ">
                <img :src=inicio2+caracteristicas.img class="card-img-top " alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ caracteristicas.nombre }}</h5><br>
                    <ul style="text-align: left; list-style: none; line-height: 80%;">
                        <li>{{ caracteristicas.precio }}</li><br>
                        <li>{{ caracteristicas.envio }}</li><br>
                        <li>{{ caracteristicas.pintura }}</li><br>
                        <li>{{ caracteristicas.pieza }}</li><br>
                        <li>{{ caracteristicas.firma }}</li><br>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['inicio2', 'data'],
}
</script>

<style>
.vendedor {
    font-size: 24px;
    color: rgba(0, 0, 0, .9);
    font-weight: 400;
    margin: 0;
}

.tarjetas {
    width: 60%;
    text-align: center;

}

.card {
    margin-top: 2rem;
    color: black;
    border: 1px solid gray;
}

.ajusta {
    overflow: auto;
}
</style>
