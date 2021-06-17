let dbConfig = require("../Utilities/mysqlConfig");



let getAbscence = (criteria, callback) => {
//criteria.aricle_id ? conditions += ` and aricle_id = '${criteria.aricle_id}'` : true;
dbConfig.getDB().query(`select * from abscence where 1`,criteria, callback);
}

let getAbscenceDetailKey = (criteria, callback) => {
    let conditions = "";
criteria.key ? conditions += ` and key = '${criteria.key}'` : true;
dbConfig.getDB().query(`select * from abscence where 1 ${conditions}`, callback);
}

let getAbscenceDetail = (criteria, callback) => {
    let conditions = "";
criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
dbConfig.getDB().query(`select * from abscence where 1 ${conditions}`, callback);
}

let getSoldeAbscence = (criteria, callback) => 
{
    dbConfig.getDB().query(
        `SELECT (SELECT COUNT(*) FROM abscence where abs_etat='En Attente') as count1,
         (SELECT COUNT(*) FROM abscence where abs_etat='Acceptée') as count2,
          (SELECT COUNT(*) FROM abscence where abs_etat='Refusée') as count3`,callback);
}

let getAbscenceUser = (criteria, callback) => 
{
    console.log("daogetAbscenceUser");
    console.log(criteria.id_employe);
    let conditions = "";
conditions += `id_employe = '${criteria.id_employe}'`;
    dbConfig.getDB().query(`select * from abscence where  ${conditions} `,callback);
      // dbConfig.getDB().query(`select * from abscence where 1`,criteria, callback);

}

let getSoldeAbscenceUser = (criteria, callback) => 
{
    console.log("daogetSoldeAbscenceUser");
    console.log(criteria.id_employe);
    let conditions = "";
conditions += ` and id_employe = '${criteria.id_employe}'`;
//console.log(criteria.id);
    dbConfig.getDB().query(
        `SELECT (SELECT COUNT(*) FROM abscence where abs_etat='En Attente' ${conditions}) as count1,
         (SELECT COUNT(*) FROM abscence where abs_etat='Acceptée' ${conditions}) as count2,
          (SELECT COUNT(*) FROM abscence where abs_etat='Refusée' ${conditions}) as count3 `,callback);
}

let createAbscence = (dataToSet, callback) => {
console.log("insert into abscence set ? ", dataToSet,'pankaj')
dbConfig.getDB().query(`insert into abscence values
(
'${dataToSet.id}',
'${dataToSet.id_employe}',
'${dataToSet.type_abs}',
'${dataToSet.date_deb_abs}',
'${dataToSet.date_fin_abs}',
'${dataToSet.abs_etat}',
'${dataToSet.abs_motif}'
) `, callback);
}

let deleteAbscence = (criteria, callback) => {
let conditions = "";
criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
console.log(`delete from abscence where 1 ${conditions}`);
dbConfig.getDB().query(`delete from abscence where 1 ${conditions}`, callback);

}

let updateAbscence = (criteria,dataToSet,callback) => {
    let conditions = "";
let setData = "";
criteria.id ? conditions += ` and id = '${criteria.id}'` : true;
dataToSet.category ? setData += `category = '${dataToSet.category}'` : true;
dataToSet.title ? setData += `, title = '${dataToSet.title}'` : true;
console.log(`UPDATE abscence SET ${setData} where 1 ${conditions}`);
dbConfig.getDB().query(`UPDATE abscence SET ${setData} where 1 ${conditions}`, callback);
}
module.exports = {
getAbscence : getAbscence,
createAbscence : createAbscence,
deleteAbscence : deleteAbscence,
updateAbscence : updateAbscence,
getSoldeAbscence:getSoldeAbscence,
getAbscenceDetail : getAbscenceDetail,
getAbscenceDetailKey: getAbscenceDetailKey,
getSoldeAbscenceUser:getSoldeAbscenceUser,
getAbscenceUser:getAbscenceUser
}