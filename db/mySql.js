"use strict";
const  mysql = require( 'mysql2/promise');
const Store= require( 'electron-store')


// Crea una nueva instancia de Store
const store = new Store();

const objetoStringRecuperado = store.get("DataB/V1");
let  objetoRecuperado = 'no data'
// Convertir la cadena JSON de nuevo a un objeto JavaScript
if (objetoStringRecuperado){
 objetoRecuperado = JSON.parse(objetoStringRecuperado);

}


    

    const connectInfo = {
      host: objetoRecuperado?.host ? objetoRecuperado?.host :'mysql.hoster905.com' ,
      user: objetoRecuperado?.user ? objetoRecuperado?.user :'monarauayb',
      password: objetoRecuperado?.password ? objetoRecuperado?.password :'Pokemon54@',
      database: objetoRecuperado?.database ? objetoRecuperado?.database :'monarau_db'
  }
    
      let instancia = null
    async function createConnection() {
      if (instancia == null){
        instancia = await mysql.createConnection(connectInfo)
        instancia.connect((err) => {
          if (err) {
              console.error('Error al conectar a la base de datos:', err);
              return;
          }
          console.log('Conexión exitosa a la base de datos MySQL');
      });
      }

       return instancia
    }
    
    
    async function list() {

      const connection = await createConnection()
      
      
      
      let dataBase;
      try {
        const [db,] = await connection.query(
          `SELECT * FROM checklist `
        );
       
        
    
        dataBase = db ;
        
        
      } catch (err) {
        console.log(err);
      }
      
      return dataBase || ["no hay datos"];
    }


    async function insert( data ) {
      const connection = await createConnection()
    
      let dataBase;
    
      try {
        const [db ] = await connection.query(
          `INSERT INTO checklist SET ? `,
          data
        );
        // results contains rows returned by server
        dataBase = db;
      } catch (err) {
        console.log(err);
      }
    
      return dataBase;
    }







    


    const dataBase = {
      
    }



module.exports ={
  list,
  insert
}