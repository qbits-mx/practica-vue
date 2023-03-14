<template>
    <CarouselComponent class="ajusta" 
        :dimg=imagenes 
        :baseUrl=url 
    />
</template>

<script>
    import CarouselComponent from '@/components/CarouselComponent'
    import info from './ProductoView.json';

    export default {
        components: {
            'CarouselComponent': CarouselComponent
        },
        data: function () {
            return { 
                imagenes: info.dimg,
                url: 'http://127.0.0.1/'
            }
        }
    }
</script>

<style>
    .ajusta {
        width: 400px;
    }
</style>