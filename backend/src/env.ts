/* eslint-disable prettier/prettier */
require('dotenv').config();
 

export class Env{
    env(){
        
       return { URI:process.env.DB}

    }
    ip(os){

      const interfaces = os.networkInterfaces();
  
      for (const interfaceName of Object.keys(interfaces)) {
        const addresses = interfaces[interfaceName];
        
        for (const address of addresses) {
          if (address.family === 'IPv4' && !address.internal) {
            return address.address;
          }
        }
      }
      
      return undefined; 

 
 
    }
}