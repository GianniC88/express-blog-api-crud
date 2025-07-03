const posts = require('../data/posts')

const index = (req, res) => {

	let filteredPosts = posts;


	if (req.query.tag) {
		filteredPosts = posts.filter(
			post => post.tags.includes(req.query.tag)
		);
	}


	res.json(filteredPosts); {
		index
	}

}


const show = (req, res) => {
	//recuperiamo l'id dall'URL e trasformiamolo in numero
	const id = parseInt(req.params.id)

	//cerchiamo il post tramite id
	const post = posts.find(post => post.id === id);
	//errore 404 se il post non è presente
	if (!post) {
		return res.sendStatus(404).json({
			error: true,
			message: `l'id ${id} non è presente`
		})
		res.json(post)
	}
	//restituiamo sotto forma di JASON
	res.json(post);
}


const destroy = (req, res) => {
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
}


const store = (req, res) => {
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

}


const update = (req, res) => {
	//recuper id dall'URL e si trasforma in numero
	const Id = parseInt(req.params.id)

	//cerchiamo il post tramide id
	const post = posts.find(post => post.id === Id);


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
	res.json(post)

}



const modify = (req, res) => {
	const id = parseInt(req.params.id)

	const post = posts.find(post => post.id === id)

	if (!post) {
		return req.statusCode(404).json({
			error: true,
			message: 'non trovato'
		})
	}
	res.send(`il post che vuoi modificare è l'id: ${id}`)
}

module.exports = { index, show, destroy, update, modify }