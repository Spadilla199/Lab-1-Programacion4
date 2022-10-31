const { Getenvio, postenvio, putenvio, deleteenvio } = require("../controllers/envio");

const {Router} =requiere('express')
const router = Router();

router.get('/', Getenvio)
router.post('/', postenvio)
router.put('/', putenvio)
router.delete('/', deleteenvio)


module.exports = router