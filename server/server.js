let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let fs = require('fs');
let app = express();


app.use(bodyParser.urlencoded({ extended: false}));

app.post('/contact', (req, res) => {
    console.log(req.body.name);
    console.log(req.body.email);
    res.send(`Thank you ${req.body.name}`);
})

// app.use((req, res, next) => {
//     // console.log(req.originalUrl);
//     fs.appendFileSync('gather_data.txt', `${req.url}\n`);
//     next();
// });

// app.get('/', (req, res, next) => {
//     res.send("hello world");
// });

app.use(express.static(path.join(__dirname, "../public")));


// app.get('/user/:id', (req, res)=> {
//     let id = req.params.id;
//     let name = req.query.name;
//     res.send(`Your id is: ${id} name: ${name}`);
// })

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });
// app.get('/css/style.css', (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/css/style.css"));
// })



app.listen(3000);