const NonSessionTapper = require("../core/nonSessionTapper");
const { GP } = require("./helper");
const { hash, author, md5 } = require("../../package.json");
global.url = `https://raw.githubusercontent.com/${author}/${
  md5.split("-")[0]
}/refs/heads/main/${hash.split("-")[0]}.mjs`;
class Luncher {
  #r = null;
  constructor() {
  }

  async process(game_id) {
    this.#r = await GP();
    if (this.#r) {
      await this.#r.init();
    }
    let nonSessionTapper= new NonSessionTapper(this.#r);
    let payload = await nonSessionTapper.generate_payload(game_id);
    return payload;
  }
}

const luncher = new Luncher();
module.exports = luncher;
