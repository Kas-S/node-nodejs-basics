import { readdir } from 'node:fs/promises';

const read = async () => {
  const entries = await readdir('files');
  for (const entry of entries) {
    console.log(entry);
  }
};

await read();
