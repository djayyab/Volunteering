const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
var db= require("../../database-mysql/index");
const userMiddleware = require('../middleware/users.js');
// router.post('sign-up', userMiddleware.validateRegister, (req, res, next) => {});
// router.post('/login', (req, res, next) => {})
// router.get('/secret-route', (req, res, next) => {
//   res.send('This is the secret content. Only logged in users can see that!');
// });

// router.post('/signup', (req, res, next) => {console.log()}


router.post('/signup', userMiddleware.validateRegister, (req, res, next) => {
  if(req.body.role == 0) {
    db.connection.query(
      `SELECT * FROM user WHERE LOWER(username) = LOWER(${db.connection.escape(
        req.body.username
      )});`,
      (err, result) => {
        if (result.length) {
          return res.status(200).send({
            msg: 'This username is already in use!'
          });
        } else {
          // username is available
          console.log('inside else',req.body.password);
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).send({
                msg: err
              });
            } else {
              // has hashed pw => add to database
              console.log('inside  else bcrypt');
              console.log(hash);
             console.log("INSERT INTO user (username,email,password, registered) VALUES ('"+
             req.body.username+"','"+req.body.email+"','"+hash+"','"+Date.now()+"'");
              db.connection.query(
                "INSERT INTO user (username,email,password, registered) VALUES ('"+
                  req.body.username+"','"+req.body.email+"','"+hash+"','"+Date.now()+"')",
                (err, result) => {
                  if (err) {
                    return res.status(400).send({
                      msg: err
                    });
                  }

                  return res.status(201).send({
                    msg: 'Registered!'
                  });
                }
              );
            }
          });
        }
      }
    );

  } else {

    db.connection.query(
      `SELECT * FROM company WHERE LOWER(username) = LOWER(${db.connection.escape(
        req.body.username
      )});`,
      (err, result) => {
        if (result.length) {
          return res.status(200).send({
            msg: 'This username is already in use!'
          });
        } else {
          // username is available
          console.log('inside else ',req.body.password);
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).send({
                msg: err
              });
            } else {
              // has hashed pw => add to database
              console.log('inside  else bcrypt');
              console.log(hash);
    
              db.connection.query(
                "INSERT INTO company (username,email,password, registered) VALUES ('"+
                  req.body.username+"','"+req.body.email+"','"+hash+"','"+Date.now()+"')",
                (err, result) => {
                  if (err) {
                    return res.status(400).send({
                      msg: err
                    });
                  }

                  return res.status(201).send({
                    msg: 'Registered!'
                  });
                }
              );
            }
          });
        }
      }
    );

    

  }
  
});


router.post('/login', (req, res, next) => {

    db.connection.query(
      `SELECT * FROM user WHERE username = "${req.body.username}"`,
      (err, user) => {
        // user does not exists
        if (err) {
          // throw err;
          return res.status(400).send({
            msg: err
          });
        }
        console.log('user infor before checking companyyyyyyyyyyyyyyyyyy');
        if (user.length == 0) {
          db.connection.query(
            `SELECT * FROM company WHERE username = "${req.body.username}"`,
            (err, company) => {
              console.log('companyyyyyyyyyyyyyy infooooooooo');
              console.log(company);
              // user does not exists
              if (err) {
                // throw err;
                return res.status(400).send({
                  msg: err
                });
              }
              if (!company.length) {
                return res.status(401).send({
                  msg: 'companyname or password is incorrect!'
                });
              }
              // check password
              bcrypt.compare(
                req.body.password,
                company[0]['password'],
                (bErr, bResult) => {
                  // wrong password
                  if (bErr) {
                    // throw bErr;
                    return res.status(401).send({
                      msg: 'companyname or password is incorrect!'
                    });
                  }
                  if (bResult) {
                    const token = jwt.sign({
                      companyname: company[0].companyname,
                      companyId: company[0].company_id
                      },
                      'SECRETKEY', {
                        expiresIn: '7d'
                      }
                    );
                    db.connection.query(
                      `UPDATE company SET last_login = now() WHERE company_id = '${company[0].company_id}'`
                    );
                    return res.status(200).send({
                      msg: 'Logged in!',
                      token,
                      user: company[0],
                      role: 1
                    });
                  }
                }
              );
            }
          );
      
          // return res.status(401).send({
          //   msg: 'Username or password is incorrect!'
          // });
        }  else {
        // check password
        console.log('userrrrrrrrrrrrinfoo');
        console.log(user);
        bcrypt.compare(
          req.body.password,
          user[0]['password'],
          (bErr, bResult) => {
            // wrong password
            if (bErr) {
              // throw bErr;
              return res.status(401).send({
                msg: 'Username or password is incorrect!'
              });
            }
            if (bResult) {
              const token = jwt.sign({
                  username: user[0].username,
                  userId: user[0].user_id
                },
                'SECRETKEY', {
                  expiresIn: '7d'
                }
              );
              db.connection.query(
                `UPDATE user SET last_login = now() WHERE user_id = '${user[0].user_id}'`
              );
              return res.status(200).send({
                msg: 'Logged in!',
                token,
                user: user[0],
                role: 0
              });
            }
            
          
            return res.status(401).send({
              msg: 'Username or password is incorrect!'
            });
          }
        );
      }
      }
    );
  
});


router.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
  
});




module.exports = router; 