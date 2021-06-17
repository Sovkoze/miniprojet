let app = require('express')();
server = require('http').Server(app);
bodyParser = require('body-parser');
express = require('express');
cors = require('cors'),
http = require('http'),
path = require('path');
let utilisateurRoute = require('./Routes/utilisateur');
let employeRoute = require('./Routes/employe');
let abscenceRoute = require('./Routes/abscence');

util = require('./Utilities/util');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use(cors());

app.use(function(err, req, res, next) {
return res.send({ "statusCode": util.statusCode.ONE, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG });
});

app.use('/utilisateur', utilisateurRoute);
app.use('/employe', employeRoute);
app.use('/abscence', abscenceRoute);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
next();
});

/*first API to check if server is running*/
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, '../dist/miniprojet/index.html'));
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS, PUT"
    );
  
    next();
  });

server.listen(3000,function(){
console.log('app listening on port: 3000');
});