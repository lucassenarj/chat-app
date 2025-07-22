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
    avatar: {
      type: String,
      default: 'https://avatar.iran.liara.run/public'
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

