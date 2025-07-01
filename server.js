const express = require('express')
const app = express()
const port = 3000
const postRouter = require("./routers/posts.js")


app.get('/', (req, res) => {
	res.json('Hello World!')
})

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`)
})