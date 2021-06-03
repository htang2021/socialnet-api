const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ] 
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false

    }
);

// get total count of friends on retrieval
// UserSchema.virtual('friendCount').get(function() {
//     return this.users.reduce((total, user) => total + user.friends.length + 1, 0);
//   });

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;