const { Schema, model } = require('mongoose');
const itemSchema = new Schema({
    name: { type: String, required: true, unique: true },
    itemType: { type: String, required: true },
    hsnCode: { type: String },
    purchaseRate: { type: Number, required: true },
    oneKg: { type: Number },
    gst: { type: Number, required: true },
    sellingPrice: { type: Number },
    createdAt: { type: Date },
    updatedAt: { type: Date }
});

const Item = model('Item', itemSchema);
module.exports = Item;
