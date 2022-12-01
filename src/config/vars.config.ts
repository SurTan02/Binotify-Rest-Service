import dotenv from "dotenv";

dotenv.config();

export const DATA_SOURCES = {
  host: process.env.BINOTIFY_REST_SERVICE_DB_HOST || "binotify-rest-service-db",
  user: process.env.BINOTIFY_REST_SERVICE_DB_USER || "user",
  password: process.env.BINOTIFY_REST_SERVICE_DB_PASSWORD || "password",
  database: process.env.BINOTIFY_REST_SERVICE_DB_NAME || "database",
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

export const PORT = process.env.BINOTIFY_APP_WEB_PORT || 8080;

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "rahasia";

export const PW_HASH_TYPE = process.env.PW_HASH_TYPE || "sha256";

export const SOAP_SERVICE_URL =
  process.env.SOAP_SERVICE_URL ||
  "http://binotify-soap-service:8081/com/binotifysoap/SubscriptionService";

export const corsOptions = {
  origin: process.env.CLIENT_HOST || "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
};

export const SOAP_API_KEY = process.env.SOAP_API_KEY;

export const REDIS_URL =
  process.env.REDIS_URL || "binotify-rest-service-cache";
export const REDIS_PORT: number = Number(process.env.REDIS_PORT) || 6379;
