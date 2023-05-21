/* eslint-disable prettier/prettier */
require('dotenv').config();

export class Env{
    env(){
        
       return { URI:process.env.DB}

    }
}