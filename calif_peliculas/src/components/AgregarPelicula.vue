<template>
    <v-form v-model="valido" ref="formulario"
    lazy-validation>
        <v-text-field
            label="Pelicula:"
            v-model="nombre"
            :rules="reglasNombre"
            required
        ></v-text-field>
        <v-text-field
            label="Sinopsis:"
            v-model="sinopsis"
            multi-line
        ></v-text-field>
        <v-select
            label="Año de publicacion:"
            v-model="anhopub"
            :items="anhos"
        ></v-select>
        <v-text-field
            label="Genero"
            v-model="genero"
        ></v-text-field>
        <v-btn
            @click="submit"
            :disabled="!valido"
        >Guardar</v-btn>
        <v-btn @click="limpiar">Limpiar</v-btn>
    </v-form>
</template>

<script>
import axios from 'axios';

export default{
    data:()=>({
        valido:true,
        nombre: '',
        sinopsis: '',
        genero: '',
        anhopub: '',
        reglasNombre:[
            v => !!v || 'La pelicula es requerida',
        ],
        select: null,
        anhos: [
            '2016',
            '1967',
            '2001',
            '1958',
            '1959',
            '2018'
        ],
    }),
    methods: {
        guardar(){
            if(this.$refs.formulario.validate()){
                //Realizar la siguiente accion
                return axios({
                    method: 'post',
                    data: {
                        nombre: this.nombre,
                        sinopsis: this.sinopsis,
                        anhopub: this.anhopub,
                        genero: this.genero,
                    },
                    url: 'http://localhost:8981/peliculas',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(() => {
                    this.$router.push({ name: 'Inicio' });
                    this.$refs.formulario.reset();
                })
                .catch(() => {
                });
            }
            return true;
        },
        limpiar() {
            this.$refs.form.reset();
        },
    },
}
</script>