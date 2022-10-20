const express = require("express")
const hbs = require("express-handlebars")
const path = require("path")
const app = express()

//ajustes
app.set('port', process.env.PORT || 3000)

app.set("views", path.join(__dirname, "/view"))
app.set("view engine", ".hbs")
app.engine(".hbs", hbs.engine({
  extname: ".hbs",
defaultLayout: "main" 
}))

app.use(express.static("public"))

//rutas
app.get("/", (req, res) => {
  res.send("Está es la pagina de inicio de los tutos de nodejs de MrGaron")
})

app.get("/lobby", (req, res) => {
  res.render('lobby', {
    title: "webtuto"
  })
})

app.listen(app.get('port'), () => {
  console.log('web lista en el puerto', app.get('port'))
})