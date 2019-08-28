<template>
  
    <div id="Layout" class="wrapper" :class="$store.state.skin">
      <Header />
      <Sidevar />
      <div class="content-wrapper">
          <router-view/>
      </div>
      <footer class="main-footer">
          <div class="pull-right hidden-xs">
              <b>Version</b> 2.4.13
          </div>
          <strong>Copyright &copy; 2014-2019 <a href="https://adminlte.io">AdminLTE</a>.</strong> All rights
          reserved.
      </footer>
      <SidevarDerecha/>
    </div>
  
</template>

<script>
import Header from '@/components/Principal/Header/Header';
import Sidevar from '@/components/Principal/Sidevar/Sidevar';
import SidevarDerecha from '@/components/Principal/Sidevar-Derecha/Sidevar';

export default {
  name: 'Layout',
  components: { Header, Sidevar, SidevarDerecha },
  data() {
    return {
      clase_green         : 'skin-green',   
      clase_blue          : 'skin-blue',
      clase_purple        : 'skin-purple',
      clase_yellow        : 'skin-yellow',   
      clase_red           : 'skin-red',   
      clase_green_light   : 'skin-green-light',   
      clase_blue_light    : 'skin-blue-light',   
      clase_purple_light  : 'skin-purple-light',     
      clase_yellow_light  : 'skin-yellow-light',     
      clase_red_light     : 'skin-red-light',
      color : ''
    }
  },
  methods:{
    
  },
  mounted(){

  }
}
</script>