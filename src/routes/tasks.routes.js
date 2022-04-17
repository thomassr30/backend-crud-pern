const {Router} = require('express')
const router = Router();

router.get('/tasks')
router.get('tasks/:id')
router.post('/tasks')
router.delete('/tasks')
router.put('/tasks')

module.exports = router