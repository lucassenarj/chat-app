import * as mongoose from "mongoose";


export const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true
    },
    name: {
      type: String,
      require: true
    },
    chats: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chat',
    }]
  },
  {
    timestamps: true,
    collection: 'users'
  }
);

