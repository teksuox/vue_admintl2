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