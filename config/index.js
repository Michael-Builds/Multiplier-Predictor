import * as dotenv from "dotenv";
dotenv.config();

const {
    PORT,
    NODE_ENV,
    DATABASE,
    AVIATOR_URL
} = process.env;


export {
    PORT,
    NODE_ENV,
    DATABASE,
    AVIATOR_URL
};