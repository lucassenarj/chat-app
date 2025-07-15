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
  },
  {
    timestamps: true,
    collection: 'users'
  }
);

