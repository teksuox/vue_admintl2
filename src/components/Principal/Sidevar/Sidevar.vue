<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Daniel Perez</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <Menu ubicacion="blanco" icono="fa-home" nombre="Blanco" :numero_con=data />
        <Menu ubicacion="otro" icono="fa-bicycle" nombre="Otros"  />
        <Menu ubicacion="general" icono="fa-bicycle" nombre="Gerenal"  />
        <Menu ubicacion="login" icono="fa-user" nombre="login"  />
      </ul>
    </section>
  </aside>
</template>

<script>
import Menu from './Menu'

export default {
  name: 'SidevarDerecha',
  components: { Menu },
  data() {
    return {
      data : [{id:1, color:'red', numero:1 },{id:2, color:'blue', numero:2 }]
    }
  },
  methods:{
    
  },
  mounted(){
    console.log(window.location.pathname)
  }
  
}
</script>