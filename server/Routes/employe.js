let express = require('express'),
router = express.Router(),
util = require('../Utilities/util'),
employeService = require('../Services/employe');
/**Api to create employe */
router.post('/create-employe', (req, res) => {
employeService.createEmploye(req.body, (data) => {
res.send(data);
});
});

// /**Api to update employe */
router.put('/update-employe', (req, res) => {
employeService.updateEmploye(req.body, (data) => {
res.send(data);
});
});

// /**Api to delete the employe */
router.delete('/delete-employe', (req, res) => {
employeService.deleteEmploye(req.query, (data) => {
res.send(data);
});
});

/**Api to get the list of employe */
router.get('/get-employe', (req, res) => {
employeService.getEmploye(req.query, (data) => {
    console.log(data);
res.send(data);
});
});
/**Api to get the list of employe */
router.get('/get-employe-category', (req, res) => {
    employeService.getEmployeCategorie(req.query, (data) => {
        console.log(data);
    res.send(data);
    });
    });


// /**API to get the employe by id... */
router.get('/get-employe-by-id', (req, res) => {
employeService.getEmployeById(req.query, (data) => {
res.send(data);
});
});

router.get('/get-employe-by-key', (req, res) => {
    employeService.getEmployeByKey(req.query, (data) => {
    res.send(data);
    });
    });

module.exports = router;