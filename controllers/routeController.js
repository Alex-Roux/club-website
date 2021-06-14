// Pages
const mainIndex = (req, res) => {
    res.render("index", { title: "Accueil"});
};

const mainTeams = (req, res) => {
    res.render("teams", { title: "Équipes"});
};

const teamApex = (req, res) => {
    res.render("teams/apex", { title: "Équipe Apex Legends"});
};

const teamValorant = (req, res) => {
    res.render("teams/apex", { title: "Équipe Apex Legends"});
};

const mainEvents = (req, res) => {
    res.render("events", { title: "Évenements"});
};

const contactPage = (req, res) => {
    res.render("contact", { title: "Contact"});
};

module.exports = {
    mainIndex,
    mainTeams,
    teamApex,
    teamValorant,
    mainEvents,
    contactPage
};
