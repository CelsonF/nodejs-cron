const axios = require("axios");
require("dotenv").config();

const axiosFreshteam = axios.create({
  baseURL: process.env.FRESHTEAM_URL,
  headers: {
    Authorization: `Bearer ${process.env.FRESHTEAM_API_TOKEN}`,
  },
});

const axiosPipedrive = axios.create({
  baseURL: process.env.PIPEDRIVE_URL,
  params: {
    api_token: process.env.PIPEDRIVE_API_TOKEN,
  },
});

module.exports = { axiosFreshteam, axiosPipedrive };
