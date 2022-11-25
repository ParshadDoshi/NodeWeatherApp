var Trainee = require('../model/trainee.model');
module.exports.listTrainees = (req, res) => {
    res.render('traineeList', { Trainee });
}
module.exports.crudTrainees = (req, res) => {
    res.render('crudTrainee', { Trainee });
}
module.exports.showAddTrainee = async (req, res) => {
    res.render('addTrainee');

}
module.exports.showUpdateTrainee = async (req, res) => {
    let { id } = req.params;
    console.log(id);
    res.render('updateTrainee', { id });
}
module.exports.addTrainee = async (req, res) => {

    let { id, name } = req.body
    Trainee.push({ id, name });
    res.redirect('/trainee');

}
module.exports.updateTrainee = async (req, res) => {

    let { id, name } = req.body
    console.log("ID", id, "NAME", name);
    let restTrainee = Trainee.filter(trainee => trainee.id != id)
    console.log("Rest Trainee", restTrainee);

    let newTrainees = [...restTrainee, { id, name }]
    Trainee = newTrainees;
    res.redirect('/trainee');

}