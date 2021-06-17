let mysqlConfig = require("../Utilities/mysqlConfig");

let initialize = () => {
/*
mysqlConfig.getDB().query
(`
CREATE TABLE IF NOT EXISTS utilisateur (
    id int(8) NOT NULL,
    username varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
    firstName varchar(50) NOT NULL,
    lastName varchar(50) NOT NULL,
    role varchar(50) NOT NULL
  )
`)*/
}

module.exports = {
initialize: initialize
}