let async = require('async'),
parseString = require('xml2js').parseString;

let util = require('../Utilities/util'),
abscenceDAO = require('../DAO/abscenceDAO');
//config = require("../Utilities/config").config;


/**API to create the atricle */
let createAbscence = (data, callback) => 
{
async.auto({
abscence: (cb) => {
var dataToSet = {
"id":'',
"id_employe":data.id_employe?data.id_employe:'',
"type_abs":data.type_abs?data.type_abs:'',
"date_deb_abs":data.date_deb_abs?data.date_deb_abs:'',
"date_fin_abs":data.date_fin_abs?data.date_fin_abs:'',
"abs_etat":data.abs_etat?data.abs_etat:'',
"abs_motif":data.abs_motif?data.abs_motif:''
}
console.log(dataToSet);
abscenceDAO.createAbscence(dataToSet, (err, dbData) => {
if (err) {
cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
return;
}

cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
});
}
//]
}, (err, response) => {
callback(response.abscence);
});
}

/**API to update the abscence */
let updateAbscence = (data,callback) => {
async.auto({
abscenceUpdate :(cb) =>{
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
                    abscenceDAO.updateAbscence(criteria, dataToSet, (err, dbData)=>{
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
callback(response.abscenceUpdate);
});
}

/**API to delete the subject */
let deleteAbscence = (data,callback) => {
console.log(data,'data to set')
async.auto({
removeAbscence :(cb) =>{
if (!data.id) {
cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
return;
}
var criteria = {
id : data.id,
}
abscenceDAO.deleteAbscence(criteria,(err,dbData) => {
if (err) {
console.log(err);
cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
return;
}
cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DELETE_DATA });
});
}
}, (err,response) => {
callback(response.removeAbscence);
});
}

/***API to get the abscence list */
let getAbscence = (data, callback) => {
async.auto({
abscence: (cb) => {
abscenceDAO.getAbscence({},(err, data) => {
if (err) {
cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
return;
}
cb(null, data);
return;
});
}
}, (err, response) => {
callback(response.abscence);
})
}

/***API to get the abscence list */
let getAbscenceCategorie = (data, callback) => {
    async.auto({
    abscence: (cb) => {
    abscenceDAO.getAbscenceCategorie({},(err, data) => {
    if (err) {
    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
    return;
    }
    cb(null, data);
    return;
    });
    }
    }, (err, response) => {
    callback(response.abscence);
    })
    }

/***API to get the abscence list */
let getSoldeAbscence = (data, callback) => 
{
    async.auto({
    abscence: (cb) => {
    abscenceDAO.getSoldeAbscence({},(err, data) => {
    if (err) {
    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
    return;
    }
    cb(null, data);
    return;
    });
    }
    }, (err, response) => {
    callback(response.abscence);
    })
}

/***API to get the abscence detail by id */
let getSoldeAbscenceUser = (data, callback) => 
{
    async.auto({
    abscence: (cb) => {
    let criteria = 
    {
    "id_employe":data.id_employe
    }
    console.log("service");
    console.log(criteria);
    abscenceDAO.getSoldeAbscenceUser(criteria,(err, data) => {
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
    callback(response.abscence);
    })
    }

/***API to get the abscence detail by id */
let getAbscenceUser = (data, callback) => 
{
    async.auto({
    abscence: (cb) => {
        let criteria = 
    {
    "id_employe":data.id_employe
    }
    abscenceDAO.getAbscenceUser(criteria,(err, data) => {
    if (err) {
    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
    return;
    }
    cb(null, data);
    return;
    });
    }
    }, (err, response) => {
    callback(response.abscence);
    })
    }

    
/***API to get the abscence detail by id */
let getAbscenceById = (data, callback) => {
async.auto({
abscence: (cb) => {
let criteria = {
"id":data.id
}



abscenceDAO.getAbscenceDetail(criteria,(err, data) => {
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
callback(response.abscence);
})
}

/***API to get the abscence detail by id */
let getAbscenceByKey = (data, callback) => {
    async.auto({
    abscence: (cb) => {
    let criteria = {
    "key":data.key
    }
    
    
    
    abscenceDAO.getAbscenceDetail(criteria,(err, data) => {
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
    callback(response.abscence);
    })
    }



module.exports = {
createAbscence : createAbscence,
updateAbscence : updateAbscence,
deleteAbscence : deleteAbscence,
getAbscence : getAbscence,
getSoldeAbscence:getSoldeAbscence,
getSoldeAbscenceUser:getSoldeAbscenceUser,
getAbscenceCategorie:getAbscenceCategorie,
getAbscenceById : getAbscenceById,
getAbscenceByKey : getAbscenceByKey,
getAbscenceUser:getAbscenceUser
};