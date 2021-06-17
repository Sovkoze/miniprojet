let dbConfig = require("../Utilities/mysqlConfig");



let getEmploye = (criteria, callback) => {
//criteria.aricle_id ? conditions += ` and aricle_id = '${criteria.aricle_id}'` : true;
dbConfig.getDB().query(`select * from employe where 1`,criteria, callback);
}

let getEmployeDetailKey = (criteria, callback) => {
    let conditions = "";
criteria.key ? conditions += ` and key = '${criteria.key}'` : true;
dbConfig.getDB().query(`select * from employe where 1 ${conditions}`, callback);
}

let getEmployeDetail = (criteria, callback) => {
    let conditions = "";
criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
dbConfig.getDB().query(`select * from employe where 1 ${conditions}`, callback);
}

let createEmploye = (dataToSet, callback) => {
console.log("insert into employe set ? ", dataToSet,'pankaj')
dbConfig.getDB().query("insert into employe set ? ", dataToSet, callback);
}

let deleteEmploye = (criteria, callback) => {
let conditions = "";
criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
console.log(`delete from employe where 1 ${conditions}`);
dbConfig.getDB().query(`delete from employe where 1 ${conditions}`, callback);

}

let updateEmploye = (criteria,dataToSet,callback) => {
    let conditions = "";
let setData = "";
criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
dataToSet.category ? setData += `category = '${dataToSet.category}'` : true;
dataToSet.title ? setData += `, title = '${dataToSet.title}'` : true;
console.log(`UPDATE employe SET ${setData} where 1 ${conditions}`);
dbConfig.getDB().query(`UPDATE employe SET ${setData} where 1 ${conditions}`, callback);
}
module.exports = {
getEmploye : getEmploye,
createEmploye : createEmploye,
deleteEmploye : deleteEmploye,
updateEmploye : updateEmploye,
getEmployeDetail : getEmployeDetail,
getEmployeDetailKey: getEmployeDetailKey
}