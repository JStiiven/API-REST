const { Router } = require ('express');
const router = Router();

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

module.exports = router;