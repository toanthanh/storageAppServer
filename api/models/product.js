let mongoose = require('mongoose');

let productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    category: { type: String },
    description: { type: String },
    isSelling: { type: Boolean },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    productImage: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);
