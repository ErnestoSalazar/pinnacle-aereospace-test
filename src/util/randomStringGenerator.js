/**
 * returns a random string of a given length
 * @param {Number} length
 * @returns {string|string}
 */
const generateRandomString = (length = 10) => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};


module.exports = {generateRandomString};
