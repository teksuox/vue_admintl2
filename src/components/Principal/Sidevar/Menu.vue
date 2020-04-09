<template>
    <router-link tag="li" active-class="active" :to="{name:ubicacion}" exact>
      <a>
        <i :class="'fa fa-fw ' + icono"></i> 
        <span>{{nombre}}</span>
        <span class="pull-right-container" v-if="numero_con">
            <small v-for="item in numero_con" :key="item.id" :class="'label pull-right bg-' + item.color">{{item.numero}}</small>
        </span>
      </a>
    </router-link>
</template>

<script>
export default {
  props:{
    ubicacion   : { type: String, dafault: '', required: true },
    icono       : { type: String, dafault: '', required: true },
    nombre      : { type: String, dafault: '', required: true },
    numero_con  : { type: Array, dafault: [], required: false }
  },
  data (){
    return {
      
    }
  },
}
</script>