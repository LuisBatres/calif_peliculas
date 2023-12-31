import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '@/components/Inicio';
import Contacto from '@/components/Contacto';
import AgregarPelicula from '@/components/AgregarPelicula';
import Pelicula from '@/components/Pelicula';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio,
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component : Contacto, 
    },
    {
      path: '/peliculas/agregar',
      name: 'AgregarPelicula',
      component : AgregarPelicula, 
    },
    {
      path: '/peliculas/:id',
      name: 'Peliculas',
      component: Pelicula,
    }
  ],
});
