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
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(cors());
}

const setProdEnv = function(app){
    process.env.NODE_ENV = "production";
    app.use(bodyParser.json());
    app.use(express.static(__dirname + '/../dist'));
}