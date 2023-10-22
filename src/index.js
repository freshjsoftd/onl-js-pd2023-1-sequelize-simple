// const http = require('http');
require('dotenv').config();
import cors from 'cors';

// const express = require('express');
import express from 'express';

import router from './routers'

const db = require('./db/models');

const app = express();
const PORT  = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/api', router);


const dbCheck = async () => {
	try {
		await db.sequelize.authenticate();
		console.log(`Connection with << ${process.env.DB_NAME.toUpperCase()} >> has been established successfully`)
	} catch (error) {
		console.error('Unable to connect to DB: ', error.message)
	}
}

dbCheck();


app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
// const bcrypt = require('bcrypt');
// const { Op } = require('sequelize');


