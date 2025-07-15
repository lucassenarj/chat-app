import * as mongoose from "mongoose";


export const MessageSchema = new mongoose.Schema(
  {
    sender: {
      type: String,
      require: true
    },
    message: {
      type: String,
      require: true
    },
    timestamp: {
      type: String,
      require: true
    },
  },
  {
    timestamps: true,
    collection: 'messages'
  }
);
