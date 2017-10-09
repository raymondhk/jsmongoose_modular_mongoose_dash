const mongoose = require('mongoose')

const WolfSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Please enter a name!"], minlength: [2, "Name must be at least 2 characters long!"] },
    color: { type: String, required: true },
    eyes: { type: String, required: true },
    created: { type: Date, default: Date.now }
})
const Wolf = mongoose.model('Wolf', WolfSchema)