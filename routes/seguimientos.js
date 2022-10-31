const { Getseguimientos, postseguimientos, putseguimientos, deleteseguimientos } = require("../controllers/seguimientos");

const {Router} =requiere('express')
const router = Router();

router.get('/', Getseguimientos)
router.post('/', postseguimientos)
router.put('/', putseguimientos)
router.delete('/', deleteseguimientos)



module.exports = router