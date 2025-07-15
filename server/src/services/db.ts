import * as mongoose from "mongoose";

const {
  DB_DRIVER,
  DB_PORT,
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_NAME
} = process.env;

const path = `${DB_DRIVER}://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

const dbConnection = async () => {
  try {
    
    await mongoose.connect(path);
    
    console.log('db connected: ');
  } catch (error) {
    console.error('error while connect to db: ', error);
  }
};

export default dbConnection;

