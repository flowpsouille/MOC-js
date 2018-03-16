module.exports = server => {
    server.settings = require('./settings.json');
    server.settings.PORT = process.env.PORT || server.settings.PORT;
};