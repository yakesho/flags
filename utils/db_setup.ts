export async function dbSetup(): Promise<string[]> {
  const queries: string[] = [];

  for await (const file of Deno.readDir("./db")) {
    if (file.isFile && file.name.endsWith(".sql")) {
      const query = (await Deno.readTextFile(`./db/${file.name}`))
        .split(/\n|\r/)
        .map((x: string) => x.trim())
        .filter((x: string) => x.length)
        .join(" ");
        
      queries.push(query);
    }
  }

  return queries;
}