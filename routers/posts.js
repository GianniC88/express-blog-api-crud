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
	//recuperiamo l'id dall'URL e trasformiamolo in numero
	const id = parseInt(req.params.id)

	//cerchiamo il post tramite id
	const post = posts.find(post => post.id === id);
	//restituiamo sotto forma di JASON
	res.json(post);
});
module.exports = router;

//destroy
router.delete('/:id', (req, res) => {
	//recupero d'id dal'URL e lo trasformo in numero
	const id = parseInt(req.params.id)

	//cerchiamo il post tramite id
	const post = posts.find(post => post.id === id);

	//controllo
	if (!post) {
		res.status(404);

		return res.json({
			status: 404,
			error: "not found",
			message: "Post non trovato"
		})
	}
	//rimozione post n°
	posts.splice(posts.indexOf(post), 1)
	//verifica sul terminale
	console.log(posts)
	//restituiamo lo status corretto
	res.sendStatus(204)
})


/*store (create)*/
router.post('/', (req, res) => {
	//console.log(req.body, 'ciao')

	const postId = posts[posts.length - 1].id + 1
	console.log(postId);

	const newPost = {
		id: postId,
		title: req.body.title,
		content: req.body.content,
		image: req.body.image,
		tags: req.body.tags
	}
	//console.log(newPost);

	//res.send('Creazione nuovo Post');

	posts.push(newPost);
	console.log(posts)

	res.status(201).json(newPost)

})

router.put('/:id', (req, res) => {
	//recuper id dall'URL e si trasforma in numero
	const postId = parseInt(req.params.id)

	//cerchiamo il post tramide id
	const post = posts.find(post => post.id === postId);


	//controllo
	if (!post) {
		return res.status(404).json({
			error: true,
			message: "inesistente"
		});

	}

	//aggiorno il post

	post.title = req.body.title
	post.content = req.body.content
	post.image = req.body.image
	post.tags = req.body.tags

	console.log(posts)
	res.json(posts)

})

