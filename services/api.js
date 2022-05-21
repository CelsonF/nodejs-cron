const axios = require("axios");

const axiosFreshteam = axios.create({
  baseURL: "https://viniciusalexsander11.freshteam.com/api/",
  headers: {
    Authorization: "Bearer NfHyK6lS86hLS7hy9ekTrw",
  },
});

const axiosPipedrive = axios.create({
  baseURL: "https://testandotrabalho.pipedrive.com/v1",
  params: {
    api_token: "bed21e6bea89b40851ddbbc4b1a7f0fea79f6a1b",
  },
});

module.exports = { axiosFreshteam, axiosPipedrive };
