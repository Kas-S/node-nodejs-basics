import { readdir } from 'node:fs/promises';

const list = async () => {
  const entries = await readdir('files');
  for (const entry of entries) {
    console.log(entry);
  }
};

await list();
