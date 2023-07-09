const { default: fetch } = require("node-fetch");
const https = require("https");
const crypto = require("crypto");

const httpsAgent = new https.Agent({
  secureOptions: crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION,
  rejectUnauthorized: false,
});

const makeApiRequest = async (url, method, headers = {}, body = {}) => {
  const response = await fetch(url, {
    method: method,
    body: body,
    headers: { "Content-Type": "application/json", ...headers },
    agent: httpsAgent,
  });

  return response;
};

module.exports = {
  makeApiRequest,
};
