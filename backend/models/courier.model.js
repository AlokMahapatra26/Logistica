const mongoose = require('mongoose');

const courierSchema = new mongoose.Schema({
  sender: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
  },
  recipient: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
  },
  shipment: {
    description: { type: String, required: true },
    weight: { type: Number, required: true },
    dimensions: { type: String, required: true },
    value: { type: Number, required: true },
  },
  shippingAddress: {
    pickupLocation: { type: String, required: true },
    pickupLocationPincode:{type : Number , required : true},
    deliveryLocation: { type: String, required: true },
    deliveryLocationPincode:{type : Number  , required:true}
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  status: { type: String, default: 'pending' },
  trackingNumber: { type: String, unique: true },
  cost: { type: Number, default: 0 },
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Courier', courierSchema);