<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Daniel Pérez</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <li>
          <router-link to="blanco">
             <i class="fa fa-home"></i> <span>Blanco 1</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-red">3</small>
              <small class="label pull-right bg-blue">17</small>
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="otro">
            <i class="fa fa-chrome"></i> <span>Otro</span>
          </router-link>
        </li>
      </ul>
    </section>
  </aside>
</template>