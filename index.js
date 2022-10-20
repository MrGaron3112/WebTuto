const express = require("express")
const hbs = require("express-handlebars")
const mongoose = require("mongoose")
const path = require("path")
const config = require("./config.json")
const app = express()

const Producto = require("./modelos/producto.js")

//ajustes
app.set('port', process.env.PORT || 3000)

app.set("views", path.join(__dirname, "/view"))
app.set("view engine", ".hbs")
app.engine(".hbs", hbs.engine({
  extname: ".hbs",
defaultLayout: "main" 
}))

app.use(express.static("public"))

//mongodb

mongoose.connect(config.mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('conectado a la base de datos')
}).catch((err) => {
console.log('hubo un error al conectar con mongodb');
  console.log(err)
})

app.use(express.urlencoded({extended: true}))

//rutas
app.get("/", (req, res) => {
  res.send("Está es la pagina de inicio de los tutos de nodejs de MrGaron")
})

app.get("/lobby", (req, res) => {
  res.render('lobby', {
    title: "webtuto"
  })
})

app.get("/enviar", (req, res) => {
  res.render('enviarProducto', {
    title: "enviar Producto"
  })
})

app.post("/insertar", (req, res) => {
  console.log(req.body)

  const producto = new Producto(
    req.body
  )

  producto.save().then( () => {
    console.log('registro guardado')
  })
  
})

app.listen(app.get('port'), () => {
  console.log('web lista en el puerto', app.get('port'))
})