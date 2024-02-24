"use strict";
import  mysql from 'mysql2/promise';



    const connectInfo = {
      host: 'localhost',
      user: 'root',
      password: 'asdfghjkl',
      database: 'checkData'
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
      list,
      insert
    }



export default dataBase