const express = require("express");

const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.get("/", function (req, res) {

    let today = new Date();
    let currentdate=today.getDay();
    let day="";
    
    switch (currentdate) {
        case 0:
            day="sunday"
            break;
        case 1:
            day="monday"
            break;
        case 2:
            day="tuesday"
            break;
        case 3:
            day="wedday"
            break;
        case 4:
            day="thursday"
            break;
        case 5:
            day="friday"
            break;
        case 6:
            day="saturday"
            break;
    
        default:
            console.log("error")
            break;
    }
    res.render("list", {kindofday: day});
    I

});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});