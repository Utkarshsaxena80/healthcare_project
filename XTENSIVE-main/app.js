let a=1;
if(a==0){require('dotenv').config();}//set for development

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsmate = require("ejs-mate");
const ExpressError = require("./utils/expresserror"); // Import the correct error utility
const session = require("express-session");
const MongoStore = require('connect-mongo'); 
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const app = express();
const dbUrl = process.env.ATLAS_URL_DB;
const secret = process.env.SECRET ;

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: { secret: secret },
    touchAfter: 24 * 3600 
});

store.on("error", () => {
    console.log("Error in Mongo Store");
});

const sessionOptions = {
    store,
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const listingsRouter = require("./routes/listing.js"); // Correct import
const usersRouter = require("./routes/user.js");

async function main() {
    await mongoose.connect(dbUrl);
    console.log("Connected to DB");
}

main().catch(err => {
    console.log(err);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsmate);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.redirect("/product");
});

//used flash to flash error and success messages
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.curruser = req.user;
    next();
});

// Routes
app.use("/product", listingsRouter);
app.use("/", usersRouter);

app.get("/siteguide",(req,res) =>{ 
    res.render('listings/guide.ejs');
});
//middleware for errors
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
    const { statuscode = 500, message = "Something went wrong" } = err;
    res.status(statuscode).render("error", { err });
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
