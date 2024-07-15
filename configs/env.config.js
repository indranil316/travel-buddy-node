import * as dotenv from "dotenv";

dotenv.config();

export default {
    PORT : process.env.PORT,
    MONGO_URI : process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    DB_NAME: process.env.DB_NAME
}