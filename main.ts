import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry #187 "The Porch Radio": one quiet afternoon on the porch — the radio, my father humming, a chair being fixed — told in a single sentence so the memory lands whole.
const text = "An old song crackled from the radio on the porch while my father hummed along and fixed a broken chair, and I sat beside him believing afternoons like that would never end.";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(repoDir, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
