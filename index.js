const { translate } = require("./src/openai-api-handler");

const run = async () => {
  const response = await translate([
    { role: "user", content: "Say this is a test!" },
  ]);

  console.log(response);
};

run();
