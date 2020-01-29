const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdThoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thoughts'
    }
  ]
});

module.exports = mongoose.model('Thoughts', thoughtSchema);