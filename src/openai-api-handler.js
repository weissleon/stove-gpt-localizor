const { configData } = require("./config-handler");
const { makeApiRequest } = require("./network-handler");

const API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
const ORG_ID = "org-PPeOPyF6ejVsbGzjEHmHvJ75";
const translate = async (messages) => {
  const payload = {
    model: "gpt-4",
    messages: messages,
    temperature: 0.7,
  };

  const response = await makeApiRequest(
    API_ENDPOINT,
    "POST",
    {
      Authorization: `Bearer ${configData["openAiApiKey"]}`,
      "OpenAI-Organization": ORG_ID,
    },
    JSON.stringify(payload)
  );

  if (response.status !== 200) throw new Error("Network Request failed");
  return (await response.json()).choices;
};

module.exports = { translate };
