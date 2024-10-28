const { default: axios } = require("axios");
const logger = require("../utils/logger");
const headers = require("./header");
const settings = require("../config/config");
const app = require("../config/app");
const user_agents = require("../config/userAgents");
const fs = require("fs");
const sleep = require("../utils/sleep");
const ApiRequest = require("./api");
var _ = require("lodash");
const path = require("path");
const _isArray = require("../utils/_isArray");
const Fetchers = require("../utils/fetchers");
const { HttpsProxyAgent } = require("https-proxy-agent");

class NonSessionTapper {
  constructor(lkl) {
    this.bot_name = "blum";
    this.lkl = lkl;
  }

  async generate_payload(game_id) {
    const fetchers = new Fetchers(
      this.api,
      this.session_name,
      this.bot_name,
      this.lkl
    );
    const payload = await fetchers.generate_payload(game_id);
    return payload;
  }
}
module.exports = NonSessionTapper;
