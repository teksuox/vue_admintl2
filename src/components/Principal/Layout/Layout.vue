<template>
  <div id="Layout" class="wrapper" style="height: auto; min-height: 100%;" :class="$store.state.skin">
    <Header />
    <Sidevar />
    <div class="content-wrapper">
        <router-view/>
    </div>
    <footer class="main-footer">
        <div class="pull-right hidden-xs">
            <b>Version</b> 1.0.0
        </div>
        <strong>Copyright &copy; 2020 <a href="https://macoda.cl">Macoda</a>.</strong> Todos los derechos reservados.
    </footer>
    <SidevarDerecha/>
  </div>
</template>

<script src="./Layout.js"></script>
<style src="./Layout.scss" lang="scss" scoped />