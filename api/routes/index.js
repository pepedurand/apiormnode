const bodyParser = require('body-Parser')
const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        pessoas,
        niveis
        // turmas
        )
}