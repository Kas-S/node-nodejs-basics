const parseEnv = () => {
  const env = process.env;
  let result = '';
  Object.keys(env)
    .filter((key) => key.startsWith('RSS_'))
    .forEach((key) => {
      result += `${key}=${env[key]}; `;
    });
  console.log(result.slice(0, -2));
};

parseEnv();
