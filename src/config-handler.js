const yaml = require("js-yaml");
const { readFileSync, checkIfFileExists } = require("./fs-handler");
const CONFIG_FILEPATH = "./config.yml";

const loadConfigData = () => {
  const fileExists = checkIfFileExists(CONFIG_FILEPATH);
  if (!fileExists) throw new Error("Config file is missing");

  const configText = readFileSync(CONFIG_FILEPATH, { encoding: "utf-8" });
  const configData = yaml.load(configText);

  return configData;
};

module.exports = {
  configData: loadConfigData(),
};
