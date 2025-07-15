import { ChatSchema } from "./../schemas/chat-schema";
import * as mongoose from "mongoose";

const Chat = mongoose.model('Chat', ChatSchema);

export default Chat;

