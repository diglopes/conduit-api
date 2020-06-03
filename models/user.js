const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    required: [true, 'can\'t be blank'],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    index: true,
    unique: true
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, 'can\'t be blank'],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true,
    unique: true
  },
  bio: String,
  image: String,
  hash: String,
  salt: String
}, {
  timestamps: true
})

mongoose.model('User', UserSchema)
