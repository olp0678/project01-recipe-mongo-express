import mongoose from 'mongoose';
let Schema = mongoose.Schema;

/*
  This section declares the schemas for the different documents
  that will be used
 */

// This schema represents the recipe
let recipeSchema = Schema({
  // name is a simple String type that is required
  name: {type: String, required: true},
  // description is a simple String type that is required
  description: {type: String, required: true},
  // pictureURL is a simple String type that is required
  pictureUrl: {type: String, required: true},
  // prepTime is a simple Number type that is required
  prepTime: {type: Number, required: true},
  // cookingTime is a simple Number type that is required
  cookingTime: {type: Number, required: true},
  //array of directions
  directions: {type: [String], required: true},
  //array of ingredients
  ingredients: {type: [{name:String , amount: Number}], required: true},
  //array of user Reviews
  reviews: {type: [{type: Schema.Types.ObjectId, ref: 'Review' }], required: true}
});

let reviewSchema = Schema({
    //reviews description
    description: {type: String, required: true},
    //review rating
    rating: {type: Number,minimum: 1,maximum: 5, required: true},
    //Date review was created
    date: {type: Date, default: Date.now },
    //users creating the review
    user: {type: String, required: true}
})

let userSchema = Schema({
    //full name of user
    fullName: {type: {firstName:{type:String, required: true}, lastName:{type:String, required: true} },required: true},
    //username
    userName: {type: String, required: true, unique: true},
    //email address
    email : {type: String, required: true, unique: true}
})

/*
  This section creates interactive models from the defined schemas
  above so that you can perform Create Read Update and Delete (CRUD)
  operations against the schemas.
 */
let Recipe = mongoose.model('Recipe', recipeSchema);
let Review = mongoose.model('Review', reviewSchema);
let User = mongoose.model('User', userSchema);

// Export the three created models, Recipe, review, User
export {Recipe, Review, User};
