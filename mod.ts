import { client } from "./utils/client.ts";
import { logger } from "./utils/logger.ts";
import { db } from "./utils/db.ts";

async function main() {
  try {
    await client.connect();
  } catch (e) {
    logger("error", e);
    db.close();
  }
}

if (import.meta.main) {
  main();
}

window.onunload = () => {
  db.close(true);
};
