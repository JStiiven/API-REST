const { Router } = require ('express');
const router = Router();
const _ = require('underscore');

const movies = require('../sample.json')
console.log(movies);

router.get('/', (req, res) => {
    res.json(movies)
})

router.post('/', (req,res) =>{
    const {title, year, rating}= req.body
    if (title && year && rating) {
        const id = movies.length + 1
        const newMovies = {...req.body,id}
        console.log(newMovies);
        movies.push(newMovies)
        res.send(movies)
    } else {
        res.send('¡error!')
    }
    
})

router.put('/:id', (req,res) => {
    const {id} = req.params;
    const {title, year, rating}= req.body
    if (title && year && rating){
        _.each(movies, (movie, i) => {
            if (movie.id == id){
                movie.tittle = title
                movie.year = year
                movie.rating = rating
            }
        })
        res.json(movies)
    } else {
        res.status(500).json({error: 'hubo un error'});
    }
})

router.delete('/:id', (req,res) =>{
    const { id } = req.params
    _.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i, 1)
        }
    })
    res.send(movies)
})

module.exports = router;