const express = require('express');
const app = express();

//const cors = require('cors');
//const methodOverride = require('method-override');

//app.use(cors());
app.use(express.static('public'));
app.use(express.json());

const userApiRouter = require('./user/userRoutes');

//const swaggerUi = require('swagger-ui-express');
const config = require('../../config');
//const swaggerDoc = require('./swagger.json');

//form
app.use(express.urlencoded({extended: false}));
//app.use(methodOverride('_method'));

// routes
app.use('/api/user', userApiRouter);
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//run server
app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
    
});