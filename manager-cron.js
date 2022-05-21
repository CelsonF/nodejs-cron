const SendMailDaily = require("./cron/SendMailDaily");
const CriarNovoUsuario = require("./cron/CriarNovoUsuario");

class ManagerCron {
  constructor() {
    this.jobs = [SendMailDaily, CriarNovoUsuario];
  }

  run() {
    this.jobs.forEach((job) => job.start());
  }
}

module.exports = new ManagerCron();
