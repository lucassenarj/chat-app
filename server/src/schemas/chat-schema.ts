import * as mongoose from "mongoose";

export const ChatSchema = new mongoose.Schema(
  {
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
