var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

var productSchema = new mongoose.Schema({
  imagePath: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
})

var Product = mongoose.model('Product', productSchema);
var product = new Product({
  imagePath: 'https://steamcdn-a.akamaihd.net/steam/apps/1238040/header.jpg',
  title: 'Dragon Age II',
  description: 'Experience the sequel to the 2009 Game of the Year from the critically acclaimed makers of Mass Effect. Tell your Champion’s decade-long story as you explore a magical land with the help of your party members. ',
  price: 210
})
product.save()


/*
var product = new Product({
  imagePath: 'https://steamcdn-a.akamaihd.net/steam/apps/1101190/header.jpg',
  title: 'Dungeon Defenders: Awakened',
  description: 'Dungeon Defenders: Awakened is co-op Tower Defense combined with epic Action RPG combat. You’re able to join forces with up to four players to take on a never-ending army of orcs, demons, and dragons! Are your defenses strong enough to save the world of Etheria? ',
  price: 110
})
var product = new Product({
  imagePath: 'https://steamcdn-a.akamaihd.net/steam/apps/312650/header.jpg',
  title: 'Battlezone Gold Edition',
  description: 'Strap into the cockpit of the Cobra – the most powerful tank ever built – and experience first-person tank combat across neon-scarred sci-fi landscapes in an explosive campaign for 1-4 players – now playable with or without a VR device! ',
  price: 130
})
*/
