import { mkdir, readdir, copyFile } from 'node:fs/promises';
import { cp } from 'node:fs';

const FS_FAILED = new Error('FS operation failed');

const dfs = async (source, destination) => {
  await mkdir(destination, { recursive: true });
  const entries = await readdir(source, { withFileTypes: true });
  for (const entry of entries) {
    const SP = `${source}/${entry.name}`;
    const DP = `${destination}/${entry.name}`;
    if (entry.isDirectory()) {
      await dfs(SP, DP);
    } else {
      await copyFile(SP, DP);
    }
  }
};

const copy = async () => {
  await readdir('files_copy')
    .then(() => {
      throw FS_FAILED;
    })
    .catch(() => {});
  await readdir('files').catch(() => {
    throw FS_FAILED;
  });
  await dfs('files', 'files_copy');
};

await copy();
