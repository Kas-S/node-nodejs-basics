import { open } from 'node:fs/promises';

const read = async () => {
  try {
    const file = await open('files/fileToRead.txt', 'r+');
    const data = await file.readFile({ encoding: 'utf8' });
    console.log(data);
    file.close();
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
