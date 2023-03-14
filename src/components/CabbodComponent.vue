<template>
    <div class="container-fluid pt-3">
            <div>
              <h1 style="text-align: left;">{{ producto }}</h1>
            </div>
            <div style="text-align: left; margin-top: -1.5rem; margin-left: 1rem;" class="cantidad">
              <span>{{ cantidadpro }} resultados</span>
            </div>
          </div>
          <div style="padding-left: 70%;">
            <li class="nav-item dropdown" style="list-style-type: none; color: black;">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Ordenar por {{ ordenar.orden1 }}
              </a>
              <ul class="dropdown-menu bg-dark">
                <li><a class="dropdown-item text-white fonter" href="#">{{ ordenar.orden1 }}</a></li>
                <li><a class="dropdown-item text-white fonter" href="#">{{ ordenar.orden2 }}</a></li>
                <li><a class="dropdown-item text-white fonter" href="#">{{ ordenar.orden3 }}</a></li>
              </ul>
            </li>
          </div>
</template>

<script>
export default {
    props: ['producto', 'cantidadpro', 'ordenar']
}
</script>