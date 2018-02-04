const app = require('express')()

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

es6Renderer = require('express-es6-template-engine'),
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.listen(5000)

app.get('/',(req, res) => {
    res.render('index', {locals: 
        {
            message: 'Welcome node js',
            name: 'js+express-es6-template'
        }
    });
})

app.get('/form/',(req, res) =>{
    res.render('form')
})

app.post('/addform/',(req,res) => {
    console.log(req.body)
    name = req.body.name
    res.render('form',{locals:{name: name}})
})