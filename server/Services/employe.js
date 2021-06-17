let async = require('async'),
parseString = require('xml2js').parseString;

let util = require('../Utilities/util'),
employeDAO = require('../DAO/employeDAO');
//config = require("../Utilities/config").config;


/**API to create the atricle */
let createEmploye = (data, callback) => {
async.auto({
employe: (cb) => {
var dataToSet = {
"category":data.category?data.category:'',
"title":data.title,
}
console.log(dataToSet);
employeDAO.createEmploye(dataToSet, (err, dbData) => {
if (err) {
cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
return;
}

cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DATA_UPDATED,"result":dataToSet });
});
}
//]
}, (err, response) => {
callback(response.employe);
});
}

/**API to update the employe */
let updateEmploye = (data,callback) => {
async.auto({
employeUpdate :(cb) =>{
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
                    employeDAO.updateEmploye(criteria, dataToSet, (err, dbData)=>{
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
callback(response.employeUpdate);
});
}

/**API to delete the subject */
let deleteEmploye = (data,callback) => {
console.log(data,'data to set')
async.auto({
removeEmploye :(cb) =>{
if (!data.id) {
cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.PARAMS_MISSING })
return;
}
var criteria = {
id : data.id,
}
employeDAO.deleteEmploye(criteria,(err,dbData) => {
if (err) {
console.log(err);
cb(null, { "statusCode": util.statusCode.FOUR_ZERO_ONE, "statusMessage": util.statusMessage.SERVER_BUSY });
return;
}
cb(null, { "statusCode": util.statusCode.OK, "statusMessage": util.statusMessage.DELETE_DATA });
});
}
}, (err,response) => {
callback(response.removeEmploye);
});
}

/***API to get the employe list */
let getEmploye = (data, callback) => {
async.auto({
employe: (cb) => {
employeDAO.getEmploye({},(err, data) => {
if (err) {
cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
return;
}
cb(null, data);
return;
});
}
}, (err, response) => {
callback(response.employe);
})
}

/***API to get the employe list */
let getEmployeCategorie = (data, callback) => {
    async.auto({
    employe: (cb) => {
    employeDAO.getEmployeCategorie({},(err, data) => {
    if (err) {
    cb(null, {"errorCode": util.statusCode.INTERNAL_SERVER_ERROR,"statusMessage": util.statusMessage.SERVER_BUSY});
    return;
    }
    cb(null, data);
    return;
    });
    }
    }, (err, response) => {
    callback(response.employe);
    })
    }


/***API to get the employe detail by id */
let getEmployeById = (data, callback) => {
async.auto({
employe: (cb) => {
let criteria = {
"id":data.id
}



employeDAO.getEmployeDetail(criteria,(err, data) => {
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
callback(response.employe);
})
}

/***API to get the employe detail by id */
let getEmployeByKey = (data, callback) => {
    async.auto({
    employe: (cb) => {
    let criteria = {
    "key":data.key
    }
    
    
    
    employeDAO.getEmployeDetail(criteria,(err, data) => {
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
    callback(response.employe);
    })
    }



module.exports = {
createEmploye : createEmploye,
updateEmploye : updateEmploye,
deleteEmploye : deleteEmploye,
getEmploye : getEmploye,
getEmployeCategorie:getEmployeCategorie,
getEmployeById : getEmployeById,
getEmployeByKey : getEmployeByKey
};