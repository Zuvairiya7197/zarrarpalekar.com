import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const chunksDir = path.join(process.cwd(), ".next", "static", "chunks");
const sourceMapPattern = /\/\/# sourceMappingURL=.+\.map\s*$/m;

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      yield* walk(fullPath);
      continue;
    }

    if (entry.isFile()) {
      yield fullPath;
    }
  }
}

async function ensureSourceMapLink(jsFilePath) {
  if (!jsFilePath.endsWith(".js")) {
    return false;
  }

  const mapFilePath = `${jsFilePath}.map`;

  try {
    await stat(mapFilePath);
  } catch {
    return false;
  }

  const jsContent = await readFile(jsFilePath, "utf8");
  if (sourceMapPattern.test(jsContent)) {
    return false;
  }

  const mapFileName = path.basename(mapFilePath);
  const nextContent = `${jsContent.trimEnd()}\n\n//# sourceMappingURL=${mapFileName}\n`;
  await writeFile(jsFilePath, nextContent, "utf8");
  return true;
}

async function main() {
  let updatedCount = 0;

  for await (const filePath of walk(chunksDir)) {
    const wasUpdated = await ensureSourceMapLink(filePath);
    if (wasUpdated) {
      updatedCount += 1;
    }
  }

  if (updatedCount > 0) {
    console.log(`Added missing sourceMappingURL to ${updatedCount} chunk file(s).`);
  } else {
    console.log("All chunk files already had source map links.");
  }
}

main().catch((error) => {
  console.error("Failed to ensure source map links:", error);
  process.exit(1);
});
