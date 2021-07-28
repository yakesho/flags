import type { LoggerType } from "../types.d.ts";

export function logger(type: LoggerType, message: string): void {
  switch (type) {
    case "error": {
      return console.log(`[\x1b[31mError\x1b[0m]: ${message}`);
    }

    case "info": {
      return console.log(`[\x1b[94mInfo\x1b[0m]: ${message}`);
    }

    case "warn": {
      return console.log(`[\x1b[31m\x1b[33mWarn\x1b[0m]: ${message}`);
    }
  }
}
