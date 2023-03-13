<template>
    <div>
        <HeaderComponent/>
        <body>
            <SideBarComponent/>
            <div class="ms-5">
                <div class="ms-5 px-5 pt-2 w-100">
                    <div class="p-5">
                        <h2 class="texts1"><strong>Compras</strong></h2>
                    </div>
                    <div class="px-5 d-flex ">
                        <div class="input-group me-5 w-25">
                            <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
                            <input type="text" class="form-control" placeholder="Buscar" aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group mx-5 w-auto">
                            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-sliders me-1"></i> Todas</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Este mes</a></li>
                                <li><a class="dropdown-item" href="#">Mes pasado</a></li>
                                <li><a class="dropdown-item" href="#">Este año</a></li>
                            </ul>
                        </div>
                        <div>
                            <span class="txtgr">|</span>
                        </div>
                        <div class="mx-5 d-flex align-items-center">
                            <span class="txtmd">{{ totalCompras }} compras</span>
                        </div>
                    </div>
<!------------------------Aquí están las cards de compras---------------------------------->
                    <div v-for="(producto,index) in data" v-bind:key="index" class="mb-5">
                        <ComprasComponent :elemento=producto :url=inicio2 />
                    </div>
<!------------------------Aquí terminan las cards de compras---------------------------------->
                </div>
            </div>
        </body>
        <FooterComponent/>
    </div>
</template>
<script>
import info from "./ComprasView.json";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ComprasComponent from "@/components/ComprasComponent.vue";
import SideBarComponent from "@/components/sidebar/SideBarComponent.vue";
const  inicio =  'http://127.0.0.1/';

export default {
    components:{
        HeaderComponent,
        FooterComponent,
        ComprasComponent,
        SideBarComponent
    },
    data: function () {
        return {
            inicio2: inicio,
            img1: "merca04.png",
            img2: "merca02.png",
            img3: "merca03.png",
            img4: "05.png",

            data: info,
            
        }
    }
}
</script>
<style scoped>
.bg-bar{
  background-color: rgba(228, 228, 228, 0.404);
}

.tfecha{
    font-size: 1.2rem;
}

.txtgr{
  font-size: 1.5rem;
  font-weight: 300;
  color: gray;
}

.txtmd{
  font-size: 1.2rem;
  color: gray;
}
.amarella{
  background-color: #fff159;
}

.logo1{
  height: 40px;
}

.textDesc{
    color: gray;
    font-size: 1rem;
}

.largo1{
  width: 500px;
}

.texts1{
  text-align: left;
}

.linksurl{
  color: cornflowerblue;
}

.verde{
  color: rgb(40, 202, 40);
}
</style>