const express = require('express');
const router = express.Router();



//index
router.get('/', (req, res) => {
	res.json('post list')
});

//show
router.get('/:id', (req, res) => {
	res.json('posts detail')
});