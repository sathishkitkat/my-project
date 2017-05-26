'use strict';

import mongoose from 'mongoose';

var MapmovieendpointSchema = new mongoose.Schema({
  title: String,
 tname: String,
 location:String,
 showtime: Array,
 formdate: Array,
 image: String

});

export default mongoose.model('Mapmovieendpoint', MapmovieendpointSchema);
