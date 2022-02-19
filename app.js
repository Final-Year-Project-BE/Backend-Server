const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const path = require('path');
const rootDir = require('./util/path');

// Routes
const adminRoutes = require('./routes/admin');
const casesRoutes = require('./routes/cases');
const officerRoutes = require('./routes/officer');
const generalRoutes  = require('./routes/general');
const errorRoutes = require('./routes/error');

app.use('/admin', adminRoutes);
app.use('/cases',casesRoutes);
app.use('/officer',officerRoutes);
app.use('/error',errorRoutes);
app.use(generalRoutes);


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);

