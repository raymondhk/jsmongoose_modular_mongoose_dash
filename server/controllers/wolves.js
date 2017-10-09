const mongoose = require('mongoose')
const moment = require('moment')
const Wolf = mongoose.model('Wolf')
module.exports = {
    show: (req, res) => {
        Wolf.find({}, (err, wolves) => {
            res.render('index', {wolves: wolves, moment: moment})
        })
    },
    create: (req, res) => {
        let wolf = new Wolf(req.body)
        console.log(wolf)
        wolf.save((err) => {
            if(err){
                console.log(err)
                console.log("something went wrong")
                res.render('new', {errors: wolf.errors})
            }
            else {
                res.redirect('/')
            }
        })
    },
    edit: (req, res) => {
        let id = req.params.id
        Wolf.find({_id:id}, (err, wolf) => {
            if(err){
                console.log('something went wrong')
                res.redirect('/')
            }
            console.log('got your wolf!')
            res.render('edit', {wolf: wolf})
        })
    },
    update: (req, res) => {
        Wolf.findOne({_id: req.params.id}, (err, wolf) => {
            if(err){
                console.log('something went wrong...')
            }
            wolf.name = req.body.name || wolf.name
            wolf.color = req.body.color
            wolf.eyes = req.body.eyes
            wolf.save( (err) => {
                if(err){
                    console.log('something went wrong...')
                    res.render('edit', {errors: wolf.errors})
                }
                console.log('succesfully updated wolf!')
                res.redirect('/')
            })
        })
    },
    destroy: (req, res) => {
        Wolf.findOneAndRemove({_id:req.params.id}, (err, wolf) => {
            if(err){
                console.log('something went wrong...')
            }
            res.redirect('/')
        })
    }
}