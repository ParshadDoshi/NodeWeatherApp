module.exports.Logincheck = async (req, res) => {

    let { username, password } = req.body
    if (username === 'abc' && password === '123') {
        res.render("welcome", { username });
    } else {
        res.render("error");
    }

}
module.exports.Login = async (req, res) => {
    res.render("login");
}
