const express = require('express');
const app = express();
const taskRoute = require('./Routes/taskRoutes')

app.use(express.json());
app.use('/api/v1', taskRoute);

module.exports=app;

