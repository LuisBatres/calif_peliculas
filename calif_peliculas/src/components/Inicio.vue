<template>
    <v-layout row wrap>
      <v-flex xs4>
        <v-card>
            <v-card-title primary-title>
              <div>
                <div class ="headline">Batman vs 
                Superman</div>
                <span class="gery-text">2016 &middot; Ciencia / Accion &middot; 3h 3m</span>
              </div>
            </v-card-title>
            <v-card-text>
              Han pasado casi dos años desde que la colosal batalla de Superman (Henry Cavill) 
              contra Zod (Michael Shannon) devastó la ciudad de Metrópolis. La pérdida de vidas 
              y los daños colaterales dejaron a muchos sintiéndose enojados e impotentes, incluido 
              el multimillonario que lucha contra el crimen Bruce Wayne (Ben Affleck). Convencido 
              de que Superman es ahora una amenaza para la humanidad, Batman se embarca en una 
              venganza personal para poner fin a su reinado en la Tierra, mientras el intrigante 
              Lex Luthor (Jesse Eisenberg) lanza su propia cruzada contra el Hombre de Acero.
            </v-card-text>
            <v-card-actions>
              <v-btn color="purple">Calificar esta
                pelicula</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </template>

<script>
import axios from 'axios';
import '../assets/stylesheets/main.css';

export default{
  data(){
    return{
      mensaje: 'Hola, Como te va hoy?',
    };
  },
  methods: {
    responder(){
      async
    }
  }
}
</script>

<template>
  <v-layout row wrap>
    <v-flex xs4 v-for="pelicula in peliculas"
    :key="pelicula_id">
    <v-card>
      <v-card-title primary-title>
        <div>
          <div class="headline">
            <v-btn v-bind_to="`/peliculas/${pelicula._id}`">{{ pelicula.nombre }}</v-btn>
          </div>
            <span class="gray--text">{{ 
            pelicula.anhopub }} &middot; {{ 
            pelicula.genero }}</span>
        </div>
      </v-card-title>
      <v-card-text>
        {{ pelicula.sinopsis }}
      </v-card-text>
    </v-card>
  </v-flex>
  </v-layout>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Pelicula'
  data(){
    return {
      pelicula:[],
    };
  },
  mounted(){
    this.obtenerPelicula();
  },
  methods: {
    async obtenerPelicula(){
      return axios({
        method: 'get',
        url: `http://localhost:8081/api/peliculas/${this.
        $route.params.id}`,
      })
      .then((respuesta) => {
        this.pelicula = respuesta.data;
      })
      .catch(() => {
        
      });
    },
  },
};

</script>