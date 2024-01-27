const getMetaData = require("../lib");

const run = async function () {
  const url =
    "https://fc-polls.vercel.app/polls/549a557c-460e-4cc8-8b6c-ec5d84a26b9e";
  const data = await getMetaData(url);
  console.log(data);
};

run();
