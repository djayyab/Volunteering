var express = require('express');
var cors = require("cors");
var bodyParser = require("body-parser");
var db= require("../database-mysql/index");
var connection = db.connection;
const path = require('path');
var session = require('express-session');
const userMiddleware = require('./middleware/users.js');

var app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


// app.post('/signup', (req, res, next) => {
//   console.log(req.body)
// db.query(
//   `SELECT * FROM user WHERE (username) = ${(
//     req.body.username
//   )});`,
//   (err, result) => {
//     if (result.length) {
//       return res.status(409).send({
//         msg: 'This username is already in use!'
//       });
//     } else {
//       // username is available
//       bcrypt.hash(req.body.password, 10, (err, hash) => {
//         if (err) {
//           return res.status(500).send({
//             msg: err
//           });
//         } else {
//           // has hashed pw => add to database
//           db.query(
//             `INSERT INTO user (id, username, password, registered) VALUES ('${uuid.v4()}', ${db.escape(
//               req.body.username
//             )}, ${db.escape(hash)}, ${Date.now()})`,
//             (err, result) => {
//               console.log(err)
//               if (err) {
//                 throw err;
//                 return res.status(400).send({
//                   msg: err
                 
//                 });
//               }
//               return res.status(201).send({
//                 msg: 'Registered!'
//               });
//             }
//           );
//         }
//       });
//     }
//   }
// );
// });



// const jwtLogin = require("jwt-login");
// const roles = require("user-groups-roles");


app.use(express.json()); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
  extended: false
}));  
app.use(cors())


  const router = require('./routes/router.js');
  app.use('/', router);

// app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  // app.use(express.static(__dirname + '/../react-client/dist'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

// var Users = require('./routes/Users');
// app.use('/users',Users)




// // Roles 
// roles.createNewRole("company");
// roles.createNewRole("user");



// // privileges
// roles.createNewPrivileges(["/Volunteering", "GET"], "get Volunteering", true);
// roles.createNewPrivileges(["/Volunteering", "POST"], "inserts Volunteering", false);
// roles.createNewPrivileges(["/Volunteering", "PUT"], "edits Volunteering", false);
// roles.createNewPrivileges(["/Volunteering", "DELETE"], "deletes Volunteering", false);


// roles.addPrivilegeToRole("company",["/Volunteering", "POST"],true);

// roles.addPrivilegeToRole("company",["/Volunteering", "DELETE"],true);










app.post('/Volunteering', (req, res) => {
  console.log(req);
  console.log(req.body);
  const Volunteering_id = req.body.Volunteering_id;
  const Category = req.body.Category;
  const Description = req.body.Description;
  const address = req.body.address
  const company_id = req.body.company_id

  try{
  

    var sql = "INSERT INTO `Volunteering`(`Volunteering_id`,`Category`, `Description`,`address`,`company_id`) VALUES ('" + req.body.Volunteering_id + "','" + req.body.Category + "','" + req.body.Description + "','" + req.body.address + "','" + req.body.company_id + "')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("row created");
      res.send('row cfreated');
    });
  }
  catch(err){
    console.log(err);
    res.send('error');
  }
    // let Volunteering = req.body;
    // var sql = "SET @Volunteering_id = ?;SET @Category = ?;SET @Description = ?;SET @address = ?;SET @company_id = ? \
    // CALL VolunteeringAddOrEdit(@Volunteering_id,@Category,@Description,@address,@company_id);";
    // mysqlConnection.query(sql, [Volunteering.Volunteering_id, Volunteering.Category, Volunteering.Description, Volunteering.address], (err, rows, fields) => {
    //     if (!err){
    //       res.sends("its add :)")
    //     }
    // rows.forEach(element => {
    //     if(element.constructor == Array)
    //     res.send('Inserted Volunteering id : '+element[0].Volunteering_id);
    // });
    //     else
    //         consosle.log(err);


    //   var sql = "INSERT INTO `Volunteering`(`Volunteering_id`,`Category`, `Description`,`address`,`company_id`) VALUES ('" + req.body.Volunteering_id + "','" + req.body.Category + "','" + req.body.Description + "','" + req.body.address + "','" + req.body.company_id + "')";
    //   connection.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("row created");
    //     res.send('row cfreated');
    //   });
    // }
    // catch(err){
    //   console.log(err);
    //   res.send('error');
    // }


});

app.post('/company', (req, res) => {
  console.log(req);
  console.log(req.body);
  const company_id = req.body.company_id;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password
  

  try{
  

    var sql = "INSERT INTO `company`(`company_id`,`name`, `email`,`password`) VALUES ('" + req.body.company_id + "','" + req.body.name + "','" + req.body.email + "','" + req.body.password + "')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("row created");
      res.send('row cfreated');
    });
  }
  catch(err){
    console.log(err);
    res.send('error');
  }

});


  app.get('/Volunteering', (req, res) => {
    connection.query('SELECT * FROM Volunteering', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});


app.get('/Education', (req, res) => {
  connection.query("SELECT Description,address FROM Volunteering WHERE Category = 'Education'", (err, rows, fields) => {
      if (!err)
          res.send(rows);
      else
          console.log(err);
  })
});


app.get('/Medical', (req, res) => {
  connection.query("SELECT Description,address FROM Volunteering WHERE Category = 'medical'", (err, rows, fields) => {
      if (!err)
          res.send(rows);
      else
          console.log(err);
  })
});


app.get('/socialservices', (req, res) => {
  connection.query("SELECT Description,address FROM Volunteering WHERE Category = 'social services'", (err, rows, fields) => {
      if (!err)
          res.send(rows);
      else
          console.log(err);
  })
});


app.get('/Transportation', (req, res) => {
  connection.query("SELECT Description,address FROM Volunteering WHERE Category = 'transportation'", (err, rows, fields) => {
      if (!err)
          res.send(rows);
      else
          console.log(err);
  })
});







app.post('/Apply', (req, res) => {
  console.log(req);
  console.log(req.body);
  const Volunteering_id = req.body.Volunteering_id;
  const user_id = req.body.user_id;
  
  try{
  

    var sql = "INSERT INTO `user_Volunteering_work`(`Volunteering_id`,`user_id`) VALUES ('" + req.body.Volunteering_id + "','" + req.body.user_id + "')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("row created");
      res.send('row cfreated');
    });
  }
  catch(err){
    console.log(err);
    res.send('error');
  }

});


// SELECT    Category, Description ,address  FROM Volunteering, 
//   WHERE Volunteering.Volunteering_id = user_id 

// var user_id = localStorage.getItem("uid")
// app.get('/voluser', (req, res) => {
//   const user_id = req.body.user_id;

//   connection.query("SELECT * from user_Volunteering_work  join vWHERE user_id = '" + req.body.user_id + "'", (err, rows, fields) => {
//       if (!err)
//           res.send(rows);
//       else
//           console.log(err);
//   })
// });



// app.post('/auth', function(request, response) {
// 	var username = request.body.username;
// 	var password = request.body.password;
// 	if (username && password) {
// 		connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
// 			if (results.length > 0) {
// 				request.session.loggedin = true;
// 				request.session.username = username;
// 				response.redirect('/home');
// 			} else {
// 				response.send('Incorrect Username and/or Password!');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		response.send('Please enter Username and Password!');
// 		response.end();
// 	}
// });

// app.get('/home', function(request, response) {
// 	if (request.session.loggedin) {
// 		response.send('Welcome back, ' + request.session.username + '!');
// 	} else {
// 		response.send('Please login to view this page!');
// 	}
// 	response.end();
// });








app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports  = app;