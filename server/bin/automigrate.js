var path = require('path');
var app = require(path.resolve(__dirname, '../server'));
var dataSource = app.dataSources.orangePSQL;

dataSource.automigrate('translation', function(err) {
  if (err) console.log(err);
});
