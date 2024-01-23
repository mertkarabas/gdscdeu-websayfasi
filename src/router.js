import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import İletisim from './iletişim.vue';
import Anasayfa from "./anasayfa.vue";
import Bizkimiz from "./bizkimiz.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Anasayfa // Burada anasayfa adında bir Vue bileşeni kullanılıyor
  },
  {
    path: '/bizkimiz',
    component: Bizkimiz // Burada singleplayer adında bir Vue bileşeni kullanılıyor
  },
  {
    path: '/iletişim',
    component: İletisim // Burada multiplayer adında bir Vue bileşeni kullanılıyor
  },
  // Daha fazla sayfa tanımlayabilirsiniz
]
const router = new VueRouter({
  routes,
  mode: 'history', // URL'lerde # işareti olmadan kullanmak için
});

export default router;