<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div>{{ mensaje }}</div>
    </v-flex>
    <v-flex xs12>
      <v-btn color="primary"
      v-on:click="responder">Responder</v-btn>
    </v-flex>
  </v-layout>
</template>

<script type = "text/javascript">
export default{
  data(){
    return{
      mensaje: 'Hola, Como te va hoy?',
    };
  },
  methods: {
    responder(){
      this.mensaje='Me va muy bien, gracias!';
    }
  }
}
</script>