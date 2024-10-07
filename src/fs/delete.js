import { rm, access } from 'node:fs';

const remove = async () => {
  access('files/fileToRemove.txt', (err) => {
    if (err) throw new Error('FS operation failed');
    rm('files/fileToRemove.txt', () => {});
  });
};

await remove();
