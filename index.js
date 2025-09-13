import "dotenv/config";
import logger from "./src/logger.js";

const { APP_NAME, APP_ENV } = process.env;

logger.info(`${APP_NAME} gestart in ${APP_ENV} mode`);

function healthCheck() {
  return { status: "ok", timestamp: new Date().toISOString() };
}

logger.info(`Healthcheck: ${JSON.stringify(healthCheck())}`);
