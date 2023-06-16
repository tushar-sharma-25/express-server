const express = require('express');
const app = express();

// set the port
app.listen(3000);

// set the view engine to render the view
// rename .html file to .ejs
app.set('view engine', 'ejs');

// basic routing
app.get('/', (req, res)=>{
    console.log('From the console');
    // res.send(500) // send error code only
    // res.status(500).send("Error message")

    // render an view/ html
    // by defult it looks for the view in views folder
    res.render('index');
})