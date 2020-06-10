<template>
  <div>
    <section class="content-header">
      <h1>
        Blank page
        <small>it all starts here</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Examples</a></li>
        <li class="active">Blank page</li>
      </ol>
    </section>
    <section class="content">
      <div class="box">
        <button @click="prueba">traer User</button>
        <form @submit.prevent="crear">
          <input type="text" v-model="formulario.usuario" required>
          <input type="text" v-model="formulario.clave" required>
          <input type="text" v-model="formulario.clavemd5" required>
          <button type="submit">crear usuario</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import $ from "jquery";
let llave = 'qaz1wsx2'

export default {
  name: 'blanco',
  data() {
    return {
      ruta : 'en blanco',
      formulario : {
        usuario : '',
        clave : '',
        clavemd5 : ''
      }
    }
  },
  methods:{
    rutas(){
      const currentPath = this.$router.history.current.name;
      this.ruta= currentPath
    },
    async prueba(){
      try{
        let respuesta = await $.post(`https://mvc.macoda.cl/usuario/traeruser?llave=${llave}`);
        console.log(JSON.parse(respuesta));
      }catch{
        console.log('error de carga')
      }
    },
    async crear(){
      try{
        let respuesta = await $.post(`https://mvc.macoda.cl/usuario/crearUser?llave=${llave}`, this.formulario);
        console.log(JSON.parse(respuesta));
      }catch{
        console.log('error de carga')
      }
    }
  },
  mounted(){
    this.rutas()
  }
}
</script>