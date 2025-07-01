const express = require('express');
const router = express.Router();
const PORT = process.env.PORT



//index
router.get('/', (req, res) => {
	res.json('post')
});

//show
router.get('/:id', (req, res) => {
	res.json('posts')
});