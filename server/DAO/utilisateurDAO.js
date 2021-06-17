let dbConfig = require("../Utilities/mysqlConfig");



let getUtilisateur = (criteria, callback) => {
//criteria.aricle_id ? conditions += ` and aricle_id = '${criteria.aricle_id}'` : true;
dbConfig.getDB().query(`select * from utilisateur where 1`,criteria, callback);
}

let getUtilisateurDetailKey = (criteria, callback) => {
    let conditions = "";
criteria.key ? conditions += ` and key = '${criteria.key}'` : true;
dbConfig.getDB().query(`select * from utilisateur where 1 ${conditions}`, callback);
}

let getUtilisateurDetail = (criteria, callback) => {
    let conditions = "";
criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
dbConfig.getDB().query(`select * from utilisateur where 1 ${conditions}`, callback);
}

let getUtilisateurAuth = (criteria, callback) => {
    let conditions = "";
conditions += `username = '${criteria.username}' and password ='${criteria.password}'`;
console.log(conditions);
dbConfig.getDB().query(`select * from utilisateur where ${conditions}`, callback);
}

let createUtilisateur = (dataToSet, callback) => {
console.log("insert into utilisateur set ? ", dataToSet,'pankaj')
dbConfig.getDB().query("insert into utilisateur set ? ", dataToSet, callback);
}

let deleteUtilisateur = (criteria, callback) => {
let conditions = "";
criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
console.log(`delete from utilisateur where 1 ${conditions}`);
dbConfig.getDB().query(`delete from utilisateur where 1 ${conditions}`, callback);

}

let updateUtilisateur = (criteria,dataToSet,callback) => {
    let conditions = "";
let setData = "";
criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
dataToSet.category ? setData += `category = '${dataToSet.category}'` : true;
dataToSet.title ? setData += `, title = '${dataToSet.title}'` : true;
console.log(`UPDATE utilisateur SET ${setData} where 1 ${conditions}`);
dbConfig.getDB().query(`UPDATE utilisateur SET ${setData} where 1 ${conditions}`, callback);
}
module.exports = {
getUtilisateur : getUtilisateur,
createUtilisateur : createUtilisateur,
deleteUtilisateur : deleteUtilisateur,
updateUtilisateur : updateUtilisateur,
getUtilisateurDetail : getUtilisateurDetail,
getUtilisateurAuth:getUtilisateurAuth,
getUtilisateurDetailKey: getUtilisateurDetailKey
}