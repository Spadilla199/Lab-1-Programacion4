const { Getprecios, postprecios, putprecios, deleteprecios } = require("../controllers/precios");

const {Router} =requiere('express')
const router = Router();

router.get('/', Getprecios)
router.post('/', postprecios)
router.put('/', putprecios)
router.delete('/', deleteprecios)

        module.exports = router
