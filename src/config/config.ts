import logger from "@/utils/logger";
import cors from "cors";

const originRegex = /^https:\/\/([a-z0-9-]+\.)?midominio\.com$/;
const localhostRegex = /^http:\/\/localhost(:\d+)?$/;

export const corsOptions: cors.CorsOptions = {
  origin: function (origin, callback) {
    // allow Postman:
    if (!origin) {
      return callback(null, true);
    }

    //valid origin
    if (originRegex.test(origin) || localhostRegex.test(origin)) {
      return callback(null, true);
    }

    logger.warn(`❌ CORS blocked: Origin not allowed -> ${origin}`);
    callback(new Error(`❌ Not allowed origin by CORS: ${origin}`));
  },
  credentials: true,
};
