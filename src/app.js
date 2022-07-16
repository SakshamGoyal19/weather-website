const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 5500;
// first checks for the port at local system

// public static path
const staticPath = path.join(__dirname, "../public");
const partialPath = path.join(__dirname, "../templates/partials");

app.set('views', path.join(__dirname, "../templates/views"));
app.set("view engine", "hbs");
// to use view engine as hbs
hbs.registerPartials(partialPath);

app.use(express.static(staticPath));
// it calls index.html page

app.get("/", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/weather", (req, res) => {
    res.render('weather');
});

app.get("*", (req, res) => {
    res.render('error', {
        errorMsg: "Oops! Page Not Found"
    });
});
// universal operator for all requests

app.listen(port, () => {
    console.log(`Listening to port at ${port}`);
});