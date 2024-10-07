import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

const calculateHash = async () => {
  const hash = createHash('sha256');
  const data = await readFile('files/fileToCalculateHashFor.txt', {
    encoding: 'utf8'
  });
  hash.update(data);
  console.log(hash.digest('hex'));
};

await calculateHash();
