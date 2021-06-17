let mysqlConfig = require("../Utilities/mysqlConfig");

let initialize = () => {
mysqlConfig.getDB().query
(`
CREATE TABLE IF NOT EXISTS employe (
    id int(8) NOT NULL,
    first_name varchar(100) NOT NULL,
    last_name varchar(100) NOT NULL,
    date_of_birth varchar(100) NOT NULL,
    gender varchar(100) NOT NULL,
    department varchar(100) NOT NULL,
    hire varchar(100) NOT NULL
  )
`)
}

module.exports = {
initialize: initialize
}