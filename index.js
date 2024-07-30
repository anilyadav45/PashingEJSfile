const express = require("express");
//we don't have to require ejs package bcoz bydefault  express obj have the features
const app = express();
const path = require("path"); // line-1

app.set("view engine", "ejs"); //just note it
app.set("views", path.join(__dirname, "/views")); //line-2
//after setting this we can now run our index.js form any directories bcoz values folder is now set


app.get("/", (req, res) => {
    res.render("home.ejs");
})
const port = 8080;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
//render images route
app.get("/images", (req, res) => {
    res.render("images.ejs");
})
//render diceval route
app.get("/diceval", (req, res) => {
    res.render("diceval.ejs");
})


//there are 2 lines of code more that we have to write so that ejs file can render from different directorries
//we created views folder that is most important 