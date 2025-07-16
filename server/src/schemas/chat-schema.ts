import * as mongoose from "mongoose";

export const ChatSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    owner: {
      type: mongoose.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    messages: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message',
    }]
  },
  {
    timestamps: true,
    collection: 'chats'
  }
);
