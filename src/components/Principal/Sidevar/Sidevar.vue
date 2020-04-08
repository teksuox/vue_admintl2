<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{ruta}}</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <li  @click="rutas" :class="ruta == 'blanco'?'active':''">
          <router-link :to="{name:'blanco'}" >
            <i class="fa fa-home"></i> <span>Blanco 1</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-red">3</small>
              <small class="label pull-right bg-blue">17</small>
            </span>
          </router-link>
        </li>
        <li @click="rutas" :class="ruta == 'otro'?'active':''">
          <router-link :to="{name:'otro'}">
            <i class="fa fa-chrome"></i> <span>Otro</span>
          </router-link>
        </li>
        <li @click="rutas" :class="ruta == 'general'?'active':''">
          <router-link :to="{name:'general'}">
            <i class="fa fa-chrome"></i> <span>Otro</span>
          </router-link>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script>
export default {
  name: 'SidevarDerecha',
  data() {
    return {
      ruta    : this.$router.history.current.name
    }
  },
  methods:{
    rutas(){
      const currentPath = this.$router.history.current.name;
      this.ruta= currentPath;
      console.log= currentPath;
    }
  },
  mounted(){
    console.log(window.location.pathname)
  }
  
}
</script>