const EsquemaPelicula = require('../modelos/Pelicula');

module.exports.controller = (app) => {
    //Agregar una pelicula
    app.post('/peliculas', (req, res) => {
        const nuevaPelicula = new EsquemaPelicula({
            nombre: req.body.name,
            sinopsis: req.body.sinopsis,
            anhopub: req.body.anhopub,
            genero: req.body.genero,
        });

        nuevaPelicula.save()
            .then((error, pelicula) => {
                if(error){ console.log(error) };
                res.send(pelicula);
            })
    });

    // obtener todas las peliculas
    app.get('/peliculas', (req, res) => {
        EsquemaPelicula.find({}, 'nombre sinopsis anhopub genero')
        .then((error,peliculas) => {
            if(error){console.log(error);}
            else{
                res.send({peliculas,});
            }
        });
    });

    //obtener una sola pelicula
    app.get('/api/peñiculas/:id', (req,res) => {
        EsquemaPelicula.findById(req.params.id, 'nombre sinopsis anhopub genero')
        .then((error, pelicula) => {
            if(error) { console.log(error); }
            res.send(pelicula);
        });
    });

    // calificar una pelicula
    app.post('/peliculas/calif/:id', (req, res) => {
        const calificacion = new Rating({
            pelicula_id: req.params.id,
            user_id: req.body.user_id,
            calif: req.body.calif,
        });

        calificacion.save(function (error, calif) {
            if (error) { console.log(error); }
            res.send({
                pelicula_id: calificacion.pelicula_id,
                user_id: calificacion.user_id,
                calif: calificacion.calif,
            });
        });
    });
};
