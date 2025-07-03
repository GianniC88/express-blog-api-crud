const express = require('express');
const router = express.Router();
const PORT = process.env.PORT;
const posts = require('../data/posts.js');
const postController = require('../controllers/postController.js')


//index
router.get('/', postController.index);

//show
router.get('/:id', postController.show);
module.exports = router;

//destroy
router.delete('/:id', postController.destroy)

/*store (create)*/
router.post('/', postController.store)
/*update */
router.put('/:id', postController.update)

//modify (update)
router.patch('/:id', postController.modify)

module.exports = router;