import { rename as rn, access } from 'node:fs';

const FS_FAILED = new Error('FS operation failed');

const rename = async () => {
  access('files/properFilename.md', (err) => {
    if (!err) throw FS_FAILED;
  });
  access('files/wrongFilename.txt', (err) => {
    if (err) throw FS_FAILED;
  });
  rn('files/wrongFilename.txt', 'files/properFilename.md', () => {});
};

await rename();
