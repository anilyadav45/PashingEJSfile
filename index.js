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

//render images route
app.get("/images", (req, res) => {
        res.render("images.ejs");
    })
    //render diceval route
app.get("/diceval", (req, res) => {
    let dicevalue = Math.floor(Math.random() * 6) + 1; //suppose this value is from DataBase and we are sending to ejs file
    res.render("diceval.ejs", { dicevalue }); //as a object we send data to ejs file generally in single variable
})


//making template for instagram profile 
// let followers = ["Ronaldo", "Messi", "Neymar", "Dhoni","viki","hari"];//using for loop using in Ejs
// app.get("/ig/:username", (req, res) => {
//     let { username } = req.params; //assign reqeust we search "value of username" into username
//     res.render("instagram.ejs", { username, followers });//here passing username in  ejs value
// })

const port = 8080;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
//there are 2 lines of code more that we have to write so that ejs file can render from different directorries
//we created views folder that is most important 

//Instagram Page with ejs route starts : 

//here data come from DataBase suppose json file we have to require
app.get("/ig/:username", (req, res) => {
    let { username } = req.params; //only dogs and cats username found while routing
    let instaData = require("./data.json");
    let data = instaData[username]; //jsonfile[dogs or cats] will only searched
    console.log(data);
    if (data) {
        res.render("instagram.ejs", { data }); //will render only for data exits in data.json file
    } else {
        res.render("error.ejs");
    }
})

//above all concepts is called templating