
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

app.post('/usuarios',(req,resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Adicionado!!!</h1>')
})
app.post('/usuarios/:id',(req,resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado!!!</h1>')
})

app.listen(3003)

/* roda aplicação = npx nodemon server.js ou node server.js 
   Mas tem que estar na pagina do arquivo */