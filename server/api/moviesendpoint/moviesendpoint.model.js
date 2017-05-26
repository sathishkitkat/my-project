'use strict';

import mongoose from 'mongoose';

var MoviesendpointSchema = new mongoose.Schema({
    Title: String,
    Year: Number,
    Language:String,
    Genre:String,
    Director:String,
    Actors:String,
    Plot:String,
    Poster:String,
    Avg:String
});

export default mongoose.model('Moviesendpoint', MoviesendpointSchema);
