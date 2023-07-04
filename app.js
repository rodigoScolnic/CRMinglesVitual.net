const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.set('view engine' , 'ejs')
app.set('views' , 'src/views')

// rutes
const mainRouter = require('./src/routes/mainRoutes')
const apiRouter = require('./src/routes/mainApiRouter')

app.use(mainRouter)
app.use(apiRouter)

app.listen(PORT , ()=> console.log('server listening in PORT: ' + PORT))

