'use strict';

import mongoose from 'mongoose';

var SeatbookingendpointSchema = new mongoose.Schema({
  title: String,
  city: String,
  date: String,
  showtime: String,
  amoutn: String,
  totalamount: String,
  numberofseat: String,
  seatnumber: String,
  cardno: String
});

export default mongoose.model('Seatbookingendpoint', SeatbookingendpointSchema);
