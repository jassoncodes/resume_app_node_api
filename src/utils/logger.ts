import winston from "winston";
const { combine, json } = winston.format;

import "winston-daily-rotate-file";
import fs from "fs";
import path from "path";

// Definir la carpeta de logs
const logDir = "logs";

// Verificar si la carpeta existe, si no, crearla
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

// Configurar la rotación de logs diarios
const dailyRotateFileTransport = new winston.transports.DailyRotateFile({
  filename: path.join(logDir, "app-%DATE%.log"), // Nombre del archivo con fecha
  datePattern: "YYYY-MM-DD", // Formato de la fecha en el nombre
  zippedArchive: true, // Comprime logs antiguos en .gz
  maxSize: "10m", // Máximo tamaño de un archivo antes de rotar (10MB)
  maxFiles: "14d", // Mantiene los logs por 14 días
  level: "info"
});

// Configurar el formato del log
const logFormat = combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  json(),
  winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
  })
);

// Configurar el logger
const logger = winston.createLogger({
  level: "info",
  format: logFormat,
  transports: [
    new winston.transports.Console(), // Muestra logs en la consola
    dailyRotateFileTransport // Guarda logs en un archivo
  ],
});

export default logger;
