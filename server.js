const express = require('express')
const app = express()
const PORT = process.env.PORT
const postRouter = require("./routers/posts")

app.use(express.static('public'))
app.use(express.json())
app.use('/api/posts', postRouter)


app.listen(PORT, () => {
	console.log(`Example app listening on port http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
	res.send('Hello World!')
})


//app.use('/api/posts', postRouter)