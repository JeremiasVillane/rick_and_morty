const users = require('../utils/users');

module.exports = (req, res) => {
    const { email, password } = req.query;

    const userFound = users.find((user) =>
        user.email === email && user.password === password
    )

    return userFound
    ? res.status(200).json({ access: true })
    : res.status(200).json({ access: false })
};
