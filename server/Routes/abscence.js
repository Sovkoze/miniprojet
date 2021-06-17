let express = require('express'),
router = express.Router(),
util = require('../Utilities/util'),
abscenceService = require('../Services/abscence');
/**Api to create abscence */
router.post('/create-abscence', (req, res) => {
abscenceService.createAbscence(req.body, (data) => {
res.send(data);
});
});

// /**Api to update abscence */
router.put('/update-abscence', (req, res) => {
abscenceService.updateAbscence(req.body, (data) => {
res.send(data);
});
});

// /**Api to delete the abscence */
router.delete('/delete-abscence', (req, res) => {
abscenceService.deleteAbscence(req.query, (data) => {
    
res.send(data);
});
});

/**Api to get the list of abscence */
router.get('/get-abscence', (req, res) => {
abscenceService.getAbscence(req.query, (data) => {
    console.log(data);
res.send(data);
});
});

/**Api to get the list of abscence */
router.get('/get-solde-abscence', (req, res) => {
    abscenceService.getSoldeAbscence(req.query, (data) => {
        console.log(data);
    res.send(data);
    });
    });

    

    /**Api to get the list of abscence */
router.get('/get-abscence-id', (req, res) => {
    abscenceService.getAbscenceUser(req.query, (data) => {
        console.log(data);
            res.send(data);
    });
    })

/**Api to get the list of abscence */
router.get('/get-solde-abscence-id', (req, res) => {
    abscenceService.getSoldeAbscenceUser(req.query, (data) => {
        console.log(data);
                  res.send(data);
    });
    });

/**Api to get the list of abscence */
router.get('/get-abscence-category', (req, res) => {
    abscenceService.getAbscenceCategorie(req.query, (data) => {
    res.send(data);
    });
    });


// /**API to get the abscence by id... */
router.get('/get-abscence-by-id', (req, res) => {
abscenceService.getAbscenceById(req.query, (data) => {
res.send(data);
});
});

router.get('/get-abscence-by-key', (req, res) => {
    abscenceService.getAbscenceByKey(req.query, (data) => {
    res.send(data);
    });
    });

module.exports = router;