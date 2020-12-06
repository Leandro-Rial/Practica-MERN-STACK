const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    productoImage: {
        type: String, required: true
    },
}, {
    timestamps: true
})


module.exports = model('Products', productSchema);