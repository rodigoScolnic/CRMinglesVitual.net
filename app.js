const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static('./public'))

app.set('view engine' , 'ejs')
app.set('views' , 'src/views')

// rutes
app.get('/' , (req,res) => {res.render('index')})

app.listen(PORT , ()=> console.log('server listening in PORT: ' + PORT))

