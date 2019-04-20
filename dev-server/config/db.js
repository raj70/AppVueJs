import mongoose from 'mongoose';

export function connectToDb(){
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true
    }, error =>{
        if(error){
            console.log('Unable to conneect to database');
            throw error;
        }else{
            console.log("Connected to MongoDb");
        }
    });
}