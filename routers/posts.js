const express = require('express');
const router = express.Router();
const PORT = process.env.PORT
const posts = require('../data/posts.js')


//index
router.get('/', (req, res) => {
	res.json(posts)
});

//show
router.get('/:id', (req, res) => {
	const id = parseInt(req.params.id)
	const post = posts.find(post => post.id === id);
	res.json(post);
});
module.exports = router;