var _ = require("lodash");

class Fetchers {
  constructor(api, session_name, bot_name, mmk) {
    this.api = api;
    this.session_name = session_name;
    this.bot_name = bot_name;
    this.mmk = mmk;
  }
  async generate_payload(game_id) {
    if (!_.isNull(this.mmk)) {
      const result = await this.mmk?.run(game_id, {});
      return result;
    }
  }
}

module.exports = Fetchers;
