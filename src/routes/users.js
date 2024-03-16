const { Router } = require ('express');
const router = Router();

const axios = require('axios');



router.get('/', async(req, res) => {
    const response = await axios('https://jsonplaceholder.typicode.com/users')
    const users = response.data;
    res.json(users)
})


module.exports = router;