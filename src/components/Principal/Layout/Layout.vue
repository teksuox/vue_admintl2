<template>
  <div id="Layout" class="wrapper">
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
    <SidevarDerecha />
  </div>
</template>

<script>
import Header from '@/components/Principal/Header/Header';
import Sidevar from '@/components/Principal/Sidevar/Sidevar';
import SidevarDerecha from '@/components/Principal/Sidevar-Derecha/Sidevar';

export default {
  name: 'Layout',
  components: { Header, Sidevar,SidevarDerecha },
}
</script>