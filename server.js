const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const postRouter = require("./routers/posts")
const posts = require('../data/posts.js')

app.use('/api/posts', postRouter)

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(PORT, () => {
	console.log(`Example app listening on port http://localhost:${PORT}`)
})

//app.use('/api/posts', postRouter)