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
        <strong>Copyright &copy; 2019 <a href="https://adminlte.io">AdminLTE</a>.</strong> All rights
        reserved.
    </footer>
    <SidevarDerecha/>
  </div>
</template>

<script src="./Layout.js"></script>
<style src="./Layout.scss" lang="scss" scoped />