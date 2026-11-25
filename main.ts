// One Star, Five Stars for the Food — make.fun entry
// A deterministic program: writes a single alien-tourist one-star review
// of Earth (with a real compliment about the food) to entry.txt.
// No randomness, no clock, no network, no input — same output every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "One star: Earth charged me rent for breathing, the Wi-Fi demanded my soul, but the street tacos were so good I considered applying for citizenship.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review + "\n", "utf8");
