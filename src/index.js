const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { PORT } = require('./config.js')

// const port = 4000

const categoriaRoutes = require('./routes/category.routes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const historyCartRoutes = require('./routes/historyCartRoutes')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(categoriaRoutes)
app.use(productRoutes)
app.use(cartRoutes)
app.use(historyCartRoutes)

app.use((error, req, res, next) => {
  console.log(error)
  return res.status(500).json({ error: error.message })
})

app.listen(PORT)
console.log(`el puerto ${PORT} es del servidor de backend`)
