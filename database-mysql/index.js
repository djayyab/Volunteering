var mysql = require('mysql');
// var Sequelize = require('Sequelize');
// var orm = new Sequelize('test2','root','root');

// var User = orm.define('user',{
// username:Sequelize.STRING
// });

// var comany = orm.define('User',{
//   username:Sequelize.STRING
//   });

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test2'
})

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

var selectAll = function (callback) {
  connection.query('SELECT * FROM Volunteering', function (err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};




module.exports.selectAll = selectAll;
module.exports.connection=connection;