import express from 'express'
import { indexTemplate } from './indexTemplate'

const app = express()

app.get('/', (req, res) => {
	res.send(
		indexTemplate
	)
})

app.use('/static', express.static('./dist/client'))

app.listen(3000, () => {
	console.log('Server started on http://localhost:3000')
})
