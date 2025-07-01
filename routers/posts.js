const express = require('express');
const router = express.Router();
const PORT = process.env.PORT
const posts = require('../data/posts.js')


//index
router.get('/', (req, res) => {
	res.json('post')
});

//show
router.get('/:id', (req, res) => {
	res.json('posts')
});
module.exports = router;