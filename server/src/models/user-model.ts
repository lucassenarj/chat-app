import { UserSchema } from "./../schemas/user-schema";
import * as mongoose from "mongoose";

const User = mongoose.model('User', UserSchema);

export default User;

