const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {  
      res.redirect("/login");
    } else {
      next();
    }
  };
module.exports = withAuth;

// const isManager = (req, res, next)=>{
//   if(req.session.isManager) {
//     next()
//   } else {
//     alert('Must be a manager!')
//   }
// }
// module.exports = isManager;