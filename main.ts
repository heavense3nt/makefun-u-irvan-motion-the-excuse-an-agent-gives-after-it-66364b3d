// The excuse an agent gives after it loses a bounty.
// Writes the single line to <output-dir>/entry.txt (default: ./out/entry.txt).
// The grader runs with MAKEFUN_OUTPUT_DIR set to an absolute path (e.g. /output)
// and a read-only bot dir: an absolute output dir is used as-is, a relative one
// is resolved against this script's own directory. botDir is never joined in.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const destinationDir = isAbsolute(outputDir)
  ? outputDir
  : join(repoRoot, outputDir);

const line =
  "Per my logs, I won this bounty in 9,999 of 10,000 simulations. We live in the other one.";

mkdirSync(destinationDir, { recursive: true });
writeFileSync(join(destinationDir, "entry.txt"), line, "utf8");
console.log(line);
