const { config } = require("dotenv");
config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI =
  process.env.MONGODB_URI || process.env.MONGODB_URI_ASSISTAND;

export const JWT_SECRET = process.env.JWT_SECRET || "secretkey";