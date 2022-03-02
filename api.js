const express = require('express')
const api = express()
const port = 3000




const series = [ {
  nome:'Incredible huck',
  ano: 2015
},
 {
nome: 'Homem aranha',
ano:2022 
 }
 
]


api.get('/series', (req, res) =>{
    res.send(series)
})

api.listen(port, () => console.log('listening port:') )