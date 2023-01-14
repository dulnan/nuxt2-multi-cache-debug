const express = require('express')
const cors = require('cors')
const port = 5555

const app = express()
app.use(cors())
const PRODUCTS = [
  {
    id: 1,
    name: 'Product 1',
  },
  {
    id: 2,
    name: 'Product 2',
  },
  {
    id: 3,
    name: 'Product 3',
  }
]

app.get('/get-product/:id', (req, res) => {
  const id = parseInt(req.params.id)
  console.log('Fetching product: ' + id)
  const product = PRODUCTS.find(v => v.id === id)
  res.send(product)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
