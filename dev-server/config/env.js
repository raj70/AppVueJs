import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import bodyParser from 'body-parser';

export function setEnvironment(app){
    if(process.env.NODE_ENV !== 'production'){
        setDevEnv(app);
    }else{
        setProdEnv(app);
    }
}

const setDevEnv = function(app){
    process.env.NODE_ENV = "development";
    process.env.DB_URL = 'mongodb://localhost:27017/task-dev-db';
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(cors());
}

const setProdEnv = function(app){
    process.env.NODE_ENV = "production";
    process.env.DB_URL = 'mongodb://localhost:27017/task-prod-db';
    app.use(bodyParser.json());
    app.use(express.static(__dirname + '/../dist'));
}