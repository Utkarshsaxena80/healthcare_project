const User = require("../models/user.js");

module.exports.rendersignupform = (req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.signupuser = async(req,res)=>{
    try{  let{username, email, password}= req.body;
      const newuser = new User({email,username});
      const registeredUser = await  User.register(newuser,password);
      
      
      req.login(registeredUser, (err)=>{
          if(err){
              return err;
          }
      
          req.flash("success", "Welcome to XTENSIV! Ready to manage your inventory with ease? Let's get started!");
          res.redirect("/product");
      })
      }
      catch(e){
          req.flash("error", e.message);
          res.redirect("/signup");
      }
  
  
  }

module.exports.loginuser = async(req,res)=>{
    req.flash("success", "Welcome back to XTENSIV! Ready to manage your inventory with ease? Let's get started!");
    const redirecturl = res.locals.redirectuser || "/product";
    res.redirect(redirecturl);
 }

 module.exports.renderloginform =(req,res)=>{
    res.render("users/login.ejs");
}

module.exports.logoutuser =(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next();
        }
        req.flash("success","you are logged out");
        res.redirect("/login");
    })
}