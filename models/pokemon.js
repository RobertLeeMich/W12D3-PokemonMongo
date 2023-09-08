const mongoose = require("mongoose")
//schema for fruit entry/display
const pokeSchema = new mongoose.Schema({
    //brackets are used to add descriptors and requirements to the items in the schema, basically options
    name: { type: String, required: true },
    //If you say this is false, SOMETHING has to be displayed anyway in the checks for the
    img: String
}, /*this is the options object*/ {
    //timestamp will show when it was created, and last updated
    timestamps: true,
})

//model for fruit that uses the fruitSchema, this allows us to manipulate items in MongoDB.
const Pokemon = mongoose.model("Pokemon", pokeSchema)

//exporting this to other files to interact with DB
module.exports = Pokemon

// const pokemon = [
//     {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur"},
//     {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur"},
//     {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur"},
//     {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander"},
//     {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard"},
//     {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle"},
//     {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle"}
// ];

// module.exports = pokemon

