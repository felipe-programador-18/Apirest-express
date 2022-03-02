const express = require('express')
const api = express()
const Poor = 3000


const Series = [{
    nome:'Homem aranha long de casa',
    ano:2019
}]

const Series = [ {
  nome:'Incredible huck',
  ano: 2015
}]


api.get('/series', (res, req) =>{
    res.send(Series)
})

api.listen(Poor, () => console.log('listening port:') )