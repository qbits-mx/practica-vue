<template>
    <div>
        <div>
            <div style="text-align: left; padding-top: 2rem;">
                <div class="color">Tiendas Oficiales</div>
                <div v-for="tiendas in data3" v-bind:key="tiendas.id">
                    <a href="#" style="color: rgb(0,0,0,.7); font-size: 14px;">{{ tiendas.tienda }}: ({{ tiendas.oficial
                    }})</a>
                </div>
            </div>
        </div>

        <div>
            <div style="text-align: left; padding-top: 2rem;">
                <div class="color">Categorias</div>
                <div v-for="Categorias in data2" v-bind:key="Categorias.id">
                    <a href="#" style="color: rgb(0,0,0,.6); font-size: 14px;">{{ Categorias.categoria }} : ({{
                        Categorias.cantidad }}) </a>
                </div>
            </div>

            <div>
                <div style="text-align: left; padding-top: 2rem;">
                    <div class="color">Costo de envío</div>
                    <div v-for="costos in data5" v-bind:key="costos.id">
                        <a href="#" style="color: rgb(0,0,0,.7); font-size: 14px;">{{ costos.costo }}: ({{ costos.cantidad
                        }})</a><span style="color: rgb(0,0,0,.5); font-size: 14px;"></span>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div style="text-align: left; padding-top: 2rem;">
                <div class="color">Tiempo de entrega</div>
                <div v-for="entregas in data4" v-bind:key="entregas.id">
                    <a href="#" style="color: rgb(0,0,0,.7); font-size: 14px;">{{ entregas.tiempo }}: ({{ entregas.cantidad
                    }})</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data3', 'data2', 'data5', 'data4']
}
</script>

<style>
.color {
    color: black;
}
</style>