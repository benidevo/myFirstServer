const path = require("path");
const User = require("../models/user");
const { sendMail } = require("../utils/common");

exports.getHomePage = function (req, res) {
    res.sendFile(path.join(__dirname, "./views/public/index.html"));
}

exports.saveData = async function (req, res) {
    const { name, email } = req.body;

    const user = new User({ name, email });
    await user.save()

    // send mail
    subject = "Congrats";
    body = 'Thank you for registering for our Webinar'
    receiver = user.email;
    await sendMail(subject, body, receiver);

    setTimeout(() => res.redirect("/"), 4000)

//    console.log(req.body.name);
}
