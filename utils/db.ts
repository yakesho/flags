import { DB } from "https://deno.land/x/sqlite@v2.5.0/mod.ts";
import { dbSetup } from "./db_setup.ts";

const db = new DB("./db/main.db");
const queries = await dbSetup();

queries.forEach((query: string) => db.query(query));

export { db };