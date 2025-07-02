const express = require('express')
const app = express()
const PORT = process.env.PORT
const postRouter = require("./routers/posts.js")

app.use(express.static('public'))
app.use(express.json())
app.use('/api/posts', postRouter)

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(PORT, () => {
	console.log(`Example app listening on port http://localhost:${PORT}`)
})

//app.use('/api/posts', postRouter)