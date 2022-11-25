const express = require('express');
const router = express.Router();
const TraineeController = require("../controller/Trainee.controller")

//router.get("/trainee", TraineeController.listTrainees);
router.get("/trainee", TraineeController.crudTrainees);
router.get("/addtrainee", TraineeController.showAddTrainee);
router.post('/trainee/add', TraineeController.addTrainee)
router.get('/updateTrainee/:id', TraineeController.showUpdateTrainee)
router.post('/updateTrainee/trainee/update', TraineeController.updateTrainee)
module.exports = router;