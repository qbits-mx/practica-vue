<template>
    <div style="text-align: left;">
        <span>{{ producto.estado }}</span>
    </div>
    <div>
        <h1 style="text-align: left; margin-left: 1px; margin-top: 6px;" class="h3">{{ producto.nombre }}</h1>
    </div>
    <div>
        <div>
            <div style="text-align: left;">
                <span class="precio">{{ producto.precio }}</span>
            </div>
        </div>
        <div style="text-align: left;">
            <p style="color: black; font-size: 20px; margin-bottom: 0;">en {{ producto.meses }} x
                <span class="promo">{{ producto.mensualidad }}</span>
                <span class="promo">
                    <nbsp> </nbsp> {{ producto.interes }}
                </span>
            </p>
            <p style="color: gray; margin-top: 0; font-size: 20px;">IVA Incluido</p>
        </div>
    </div>
    <div>
        <div style="text-align: left;">
            <a class="nav-link letra2" style="font-size: 17px;" href="#"> ver formas de pago </a>
        </div>
    </div>
    <br>
    <div>
        <div>
            <div style="text-align: left;">
                <span class="promo" style="font-size: 17px;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                        <path
                            d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg> Envio gratis a todo el país</span>
                <br>
                <span> Conoce los tiempos y las formas de envío.</span>
                <a class="nav-link letra2" style="font-size: 14px;" href="#"> Calcula cuando llega </a>
            </div>
        </div>
    </div>
    <br>
    <div>
        <div>
            <div style="text-align: left;">
                <span class="promo" style="font-size: 17px;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                        <path
                            d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                    </svg>Devolución gratis</span>
                <br>
                <span>Tienes {{ producto.dia }} {{ producto.periodo }} desde que lo recibes.</span>
                <a class="nav-link letra2" style="font-size: 14px;" href="#"> Conocer más </a>
            </div>
        </div>
    </div>
    <br>
    <br>
    <div>
        <div style="text-align: left;">
            <p style="color: black; font-weight: 600; font-size: 20px;">{{ producto.disponibles }}</p>
        </div>
    </div>
    <div class="d-grid gap-3 col-12 mx-auto">
        <button class="btn btn-primary text-white" type="button">Comprar Ahorita</button>
        <button class="btn carrito text-primary" type="button">Agregar al Carrito</button>
    </div>
    <br>
    <br>
    <div>
        <div>
            <div style="text-align: left;">
                <a class="nav-link letra2" style="font-size: 14px;" href="#"> Compra Protegida, </a>
                <span>Recibe el producto que esperabas o te devolvemos tu dinero.</span>
                <br>
                <a class="nav-link letra2" style="font-size: 14px;" href="#"> Mercado Puntos. </a>
                <span> Este producto te da: {{ producto.puntos }} pts</span>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:['producto']
}
</script>

<style>
.lado2 {
  border: 1px solid rgb(0, 0, 0, .1);
  border-radius: 8px;
  font-size: 14px;
  padding: 16px;
  width: 75%;
}
.letra2 {
  color: #3483fa;
  font-size: 13px;
  font-weight: 100;
}


span {
  color: rgb(0, 0, 0, .55);
}

.precio {
  font-size: 36px;
  color: black;
}

.promo {
  color: green;
  font-size: 25px;
}

.h3 {
  color: black;
  font-size: 22px;
}

.carrito {
  background-color: rgba(65, 137, 230, .15);
}

</style>