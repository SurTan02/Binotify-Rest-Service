import dotenv from "dotenv";

dotenv.config();

export const DATA_SOURCES = {
  host              : process.env.BINOTIFY_REST_SERVICE_DB_HOST                || 'binotify-rest-service-db',
  user              : process.env.BINOTIFY_REST_SERVICE_DB_USER                || 'user',
  password          : process.env.BINOTIFY_REST_SERVICE_DB_PASSWORD            || 'password',
  database          : process.env.BINOTIFY_REST_SERVICE_DB_NAME                || 'database',
  port              : 3306,
  waitForConnections: true,
  connectionLimit   : 10,
  queueLimit        : 0
};

export const PORT = process.env.BINOTIFY_APP_WEB_PORT || 8080;
