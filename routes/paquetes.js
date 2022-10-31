const { Getpaquetes, postpaquetes, putpaquetes, deletepaquetes } = require("../controllers/paquetes");

const {Router} =requiere('express')
const router = Router();

router.get('/', Getpaquetes)
router.post('/', postpaquetes)
router.put('/', putpaquetes)
router.delete('/', deletepaquetes)


        module.exports = router