const mongoose = require(`mongoose`)

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, `must provide a name`],
        trim: true,
        maxlength:[32, `name cannot be longer than 32 characters`]
    },
    year: {
        type: Number,
        required:[true, `must provide the year`],
        trim: true

    }

})

module.exports = mongoose.model(`Item`, ItemSchema)