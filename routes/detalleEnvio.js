const { GetdetalleEnvio, postDetalleEnvio, putDetalleEnvio, deleteDetalleEnvio } = require("../controllers/detalleEnvio");

const {Router} =requiere('express')
const router = Router();

router.get('/', GetdetalleEnvio)
router.post('/', postDetalleEnvio)
router.put('/', putDetalleEnvio)
router.delete('/', deleteDetalleEnvio)


module.exports = router