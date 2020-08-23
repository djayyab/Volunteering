module.exports = {
    validateRegister: (req, res, next) => {
      // username min length 3
      console.log("req.body~~"+req.body.username)
      if (!req.body.username || req.body.username.length < 3) {
        return res.status(200).send({
          msg: 'Please enter a username with min. 3 chars'
        });
      }
      // password min 6 chars
      if (!req.body.password || req.body.password.length < 6) {
        return res.status(200).send({
          msg: 'Please enter a password with min. 6 chars'
        });
      }

  next();
      },
      // password (repeat) does not match
    //   if (Í∏
    //     !req.body.password_repeat ||
    //     req.body.password != req.body.password_repeat
    //   ) {
    //     return res.status(400).send({
    //       msg: 'Both passwords must match'
    //     });
        


     
    // }

    isLoggedIn: (req, res, next) => {
        try {
          const token = req.headers.authorization.split(' ')[1];
          const decoded = jwt.verify(
            token,
            'SECRETKEY'
          );
          req.userData = decoded;
          next();
        } catch (err) {
          return res.status(401).send({
            msg: 'Your session is not valid!'
          });
        }
      }

    
// res.send("one|")
}


