import { writeFile, access } from 'node:fs/promises';

const create = async () => {
  try {
    await access('files/fresh.txt');
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await writeFile('files/fresh.txt', 'I am fresh and young');
    } else {
      throw err;
    }
  }
};

await create();
