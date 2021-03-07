// Pages
const mainIndex = (req, res) => {
    res.render("index", { title: "Home"});
};

const mainPage2 = (req, res) => {
    res.render("page2", { title: "Page 2"});
};

const mainPage3 = (req, res) => {
    res.render("page3", { title: "Page 2"});
};

const contactPage = (req, res) => {
    res.render("contact", { title: "Contact"});
};

module.exports = {
    mainIndex,
    mainPage2,
    mainPage3,
    contactPage
};