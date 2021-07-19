import Vue from 'vue';

// Swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

// Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox.css';

// Paginate
import Paginate from 'vuejs-paginate';

// Paginate
Vue.component('Paginate', Paginate);

// Swiper
Vue.use(VueAwesomeSwiper, {
  slidesPerView: 3,
  spaceBetween: 10,
  autoHeight: true,
});
