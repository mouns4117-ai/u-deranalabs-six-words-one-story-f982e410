import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

// One complete story in exactly six words: she plants for a future
// she never comes back to see. 37 characters, inside the 1-60 gate.
const STORY = "She planted the tree, never returned.";

function emptyDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(`${dir}/${name}`, { recursive: true, force: true });
  }
}

const outDir = "/output";
emptyDir(outDir);
writeFileSync(`${outDir}/entry.txt`, STORY + "\n", "utf8");
