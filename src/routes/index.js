const { Router } = require('express');
const router = Router();


router.get('/Usuario', (req, res) => {
    const users = {
        "Nombre": "John Stiven",
        "Apellido": "Ortega Aponte",
        "Correo": "johnortega13579@gmail.com"

    }
    res.json(users);
})

module.exports = router;