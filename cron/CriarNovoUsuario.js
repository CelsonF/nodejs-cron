const cron = require("node-cron");
const { axiosFreshteam, axiosPipedrive } = require("../services/api");

async function CriarNovoUsuario() {
  console.log("Criando novos usuários");

  const { data } = await axiosFreshteam.get("/new_hires");

  data.map(async (newHire) => {
    await axiosPipedrive
      .post("/users", {
        name: `${newHire.first_name} ${newHire.last_name}`,
        email: newHire.official_email,
        active_flag: true,
      })
      .then(function (response) {
        console.log("Finalizando criação de novos usuários");
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}

module.exports = cron.schedule("*/1 * * * *", CriarNovoUsuario, {
  scheduled: false,
});
