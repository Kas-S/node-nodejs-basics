const parseArgs = () => {
  const args = process.argv.slice(2);
  let res = '';
  for (let i = 0; i < args.length; i += 2) {
    res += `${args[i].replace(/-/g, '')} is ${args[i + 1]}, `;
  }
  console.log(res.slice(0, -2));
};

parseArgs();
