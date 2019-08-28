<template>
    <div>
        <!-- sidevar de la derecha  -->
        <aside class="control-sidebar control-sidebar-dark">
            <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
                <li class="active"><a href="#tab_1" data-toggle="tab" aria-expanded="true">Tab 1</a></li>
                <li class=""><a href="#tab_2" data-toggle="tab" aria-expanded="false">Tab 2</a></li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="tab_1">
                    <button @click="$store.state.skin = 'skin-red'" type="button" class="btn btn-block btn-danger">Rojo</button>
                    <button @click="$store.state.skin = 'skin-blue'" type="button" class="btn btn-block btn-primary">Azul</button>
                    <button @click="$store.state.skin = 'skin-black-light'" type="button" class="btn btn-block btn-default">Blanco</button>
                </div>
                <div class="tab-pane" id="tab_2">
                    
                </div>
            </div>
        </aside>
        <div class="control-sidebar-bg"></div>
        <!-- Fin sidevar de la derecha  -->
    </div>
</template>

<script>
export default {
  name: 'Sidevar',
  data() {
    return {
        color: 'skin-purple'
    }
  },
  methods:{
    cambio(){
        this.color = 'skin-red'
    }
  },
  mounted(){
      
  }
}
</script>