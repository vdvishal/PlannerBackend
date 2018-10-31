'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let userSchema = new Schema({
  userId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  userName: {
    type: String,
    default: '',
    unique: true
  },
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: 'password'
  },
  email: {
    type: String,
    default: ''
  },
  mobileNumber: {
    type: Number,
    default: 0
  },
  createdOn :{
    type:Date,
    default:""
  },
  countryCode:{
    type: Number
  }


})


mongoose.model('User', userSchema);