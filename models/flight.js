import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date,
},{
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}