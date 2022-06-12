
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const connectmongoDB = require('./config/data');
connectmongoDB();
// configuration setup
let PORT = process.env.SERVER_PORT;
app = express();
// request from body
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
//get student router
app.use('/api/students' , require('./routes/studentsRouter'));
// get admin router
app.use('/api/admins', require('./routes/adminRouter'));
// listner port
app.listen(PORT, () => console.log(`server running on ${PORT} port`));
