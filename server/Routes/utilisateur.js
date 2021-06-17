let express = require('express'),
router = express.Router(),
util = require('../Utilities/util'),
utilisateurService = require('../Services/utilisateur');
/**Api to create utilisateur */
router.post('/create-utilisateur', (req, res) => {
utilisateurService.createUtilisateur(req.body, (data) => {
res.send(data);
});
});

// /**Api to update utilisateur */
router.put('/update-utilisateur', (req, res) => {
utilisateurService.updateUtilisateur(req.body, (data) => {
res.send(data);
});
});

// /**Api to delete the utilisateur */
router.delete('/delete-utilisateur', (req, res) => {
utilisateurService.deleteUtilisateur(req.query, (data) => {
res.send(data);
});
});

/**Api to get the list of utilisateur */
router.get('/get-utilisateur', (req, res) => {
utilisateurService.getUtilisateur(req.query, (data) => {
    console.log(data);
res.send(data);
});
});
/**Api to get the list of utilisateur */
router.post('/get-utilisateur-auth', (req, res) => {
    utilisateurService.getUtilisateurAuth(req.query, (data) => {
        console.log("data : "+data.username);
    res.send(data);
    });
    });


// /**API to get the utilisateur by id... */
router.get('/get-utilisateur-by-id', (req, res) => {
utilisateurService.getUtilisateurById(req.query, (data) => {
res.send(data);
});
});

router.get('/get-utilisateur-by-key', (req, res) => {
    utilisateurService.getUtilisateurByKey(req.query, (data) => {
    res.send(data);
    });
    });

module.exports = router;