//exemple de controlleur pour model product

let User = require('../models/userModel')
let person=[];

exports.person = function (req, res) {
    let user = new User("dupont","ibti");
    person.push(user);
    res.render('person.ejs', { users: person });
    }