import {DataSource} from 'typeorm';
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT) || 5432,
    synchronize: true,
    logging: true,  
})

export async function connect(){
    try{
        const conn = await AppDataSource.initialize();
        console.log("Database connected successfully");
        return conn;
    }
    catch(err){
        console.log("Database could not be connected due to some error :",err);
    }
}