let async = require('async'),
parseString = require('xml2js').parseString;
let util = require('../Utilities/util'),
utilisateurDAO = require('../DAO/utilisateurDAO');
config = require("../Utilities/config").config;


/**API to create the atricle */
let createUtilisateur = (data, callback) => {
async.auto({
utilisateur: (cb) => {
var dataToSet = {
"category":data.category?data.category:'',
"title":data.title,
}
console.log(dataToSet);
utilisateurDAO.createUtilisateur(dataToSet, (err, dbData) => {
if (err) {
cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
return;
}

cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
});
}
//]
}, (err, response) => {
callback(response.utilisateur);
});
}

/**API to update the utilisateur */
let updateUtilisateur = (data,callback) => {
async.auto({
utilisateurUpdate :(cb) =>{
if (!data.id) {
cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
return;
}
console.log('phase 1');
var criteria = {
id : data.id,
}
var dataToSet={
"category": data.category,
"title":data.title,
}
console.log(criteria,'test',dataToSet);
                    utilisateurDAO.updateUtilisateur(criteria, dataToSet, (err, dbData)=>{
                        if(err){
cb(null,{"statusCode":util.statusCode.FOUR_ZERO_ONE,"statusMessage":util.statusMessage.SERVER_BUSY});
                        return; 
                        }
                        else{
cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });                        
                        }
                    });
}
}, (err,response) => {
callback(response.utilisateurUpdate);
});
}

/**API to delete the subject */
let deleteUtilisateur = (data,callback) => {
console.log(data,'data to set')
async.auto({
removeUtilisateur :(cb) =>{
if (!data.id) {
cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
return;
}
var criteria = {
id : data.id,
}
utilisateurDAO.deleteUtilisateur(criteria,(err,dbData) => {
if (err) {
console.log(err);
cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
return;
}
cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DELETE_DATA });
});
}
}, (err,response) => {
callback(response.removeUtilisateur);
});
}

/***API to get the utilisateur list */
let getUtilisateur = (data, callback) => {
async.auto({
utilisateur: (cb) => {
utilisateurDAO.getUtilisateur({},(err, data) => {
if (err) {
cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
return;
}
cb(null, data);
return;
});
}
}, (err, response) => {
callback(response.utilisateur);
})
}



/***API to get the utilisateur detail by id */
let getUtilisateurAuth = (data, callback) => {
    async.auto({
    utilisateur: (cb) => {
        console.log("data: "+ data.username);
    var criteria = {
        "username":data.username?data.username:'ahmed',
        "password":data.password?data.password:'karra',
        }
    console.log(criteria);
    utilisateurDAO.getUtilisateurAuth(criteria,(err, data) => {
        if (err) {
        console.log(err,'error----');
        cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
        return;
        }
        cb(null, data[0]);
        return;
        });
    }
    //]
    }, (err, response) => {
    callback(response.utilisateur);
    });
    }
    

/***API to get the utilisateur detail by id */
let getUtilisateurById = (data, callback) => {
async.auto({
utilisateur: (cb) => {
let criteria = {
"id":data.id
}



utilisateurDAO.getUtilisateurDetail(criteria,(err, data) => {
if (err) {
console.log(err,'error----');
cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
return;
}
cb(null, data[0]);
return;
});
}
}, (err, response) => {
callback(response.utilisateur);
})
}

/***API to get the utilisateur detail by id */
let getUtilisateurByKey = (data, callback) => {
    async.auto({
    utilisateur: (cb) => {
    let criteria = {
    "key":data.key
    }
    
    
    
    utilisateurDAO.getUtilisateurDetail(criteria,(err, data) => {
    if (err) {
    console.log(err,'error----');
    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
    return;
    }
    cb(null, data[0]);
    return;
    });
    }
    }, (err, response) => {
    callback(response.utilisateur);
    })
    }



module.exports = {
createUtilisateur : createUtilisateur,
updateUtilisateur : updateUtilisateur,
deleteUtilisateur : deleteUtilisateur,
getUtilisateur : getUtilisateur,
getUtilisateurAuth:getUtilisateurAuth,
getUtilisateurById : getUtilisateurById,
getUtilisateurByKey : getUtilisateurByKey
};