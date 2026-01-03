import * as fs from "fs/promises";

// remove a Directory/Folder (only if empty)
try {
  await fs.rmdir("C:\\nodejs\\courses");
} catch (error) {
  console.log(error);
}
