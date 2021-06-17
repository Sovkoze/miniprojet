let mysqlConfig = require("../Utilities/mysqlConfig");

let initialize = () => {
mysqlConfig.getDB().query
(`
CREATE TABLE IF NOT EXISTS abscence (
    id int(8) NOT NULL,
    id_employe int(8) NOT NULL,
    type_abs varchar(50) NOT NULL,
    date_deb_abs varchar(50) NOT NULL,
    date_fin_abs varchar(50) NOT NULL,
    abs_etat varchar(100) NOT NULL,
    abs_motif varchar(100) NOT NULL
  )
`)
}

module.exports = {
initialize: initialize
}