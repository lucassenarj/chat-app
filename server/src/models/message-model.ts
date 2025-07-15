import { MessageSchema } from "./../schemas/message-schema";
import * as mongoose from "mongoose";

const Message = mongoose.model('Message', MessageSchema);

export default Message;

