const wolves = require('../controllers/wolves.js')
module.exports = function(app) {
    app.get('/', (req, res) => {
        wolves.show(req, res)
    })
    app.post('/wolves', (req, res) => {
        wolves.create(req, res)
    })
    app.get('/wolves/new', (req, res) => {
        res.render('new')
    })
    app.get('/wolves/edit/:id', (req, res) => {
        wolves.edit(req, res)
    })
    app.post('/wolves/:id', (req, res) => {
        wolves.update(req, res)
    })
    app.get('/wolves/destroy/:id', (req, res) => {
        wolves.destroy(req, res)
    })
}