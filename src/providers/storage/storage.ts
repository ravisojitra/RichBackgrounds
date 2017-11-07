import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from "ionic-angular";
declare var window:any;

@Injectable()
export class StorageProvider {
  arr: any[];
  db: SQLite;
  dbData:any;
  dbObject : SQLiteObject=null;
  lastMessages:any[];
  errorMessages:any[];
  constructor(public platform:Platform,public http: Http) {
      this.dbData = {
        name:'data.db',
        location:'default'
      }
      this.db = new SQLite();
  }
  createTable() {
    this.platform.ready().then(()=>{
      this.db.create(this.dbData).then((dbs:SQLiteObject)=>{
          dbs.executeSql('CREATE TABLE IF NOT EXISTS favourites(id INTEGER PRIMARY KEY AUTOINCREMENT,url varchar(200))', {})
          .then((data)=>{
            // alert("favourites table created");
          }).catch((err)=>{
            // alert("favourites table not created");
            // alert(JSON.stringify(err));
          });
        }).then(()=>{
          // alert("Database created");
        }).catch((e)=>{
          // alert("error while creating table "+e);
        });
    });
  }

   addItem(i) {
    this.platform.ready().then(()=>{

      var InsertQuery = "INSERT INTO favourites(url) VALUES (?)";
      
      return new Promise((resolve,reject) => {
        window.sqlitePlugin.openDatabase(this.dbData,(db)=>{
          
          db.executeSql(InsertQuery,[i],(data)=>{
            // alert("data inserted line no. 56");
            // alert(JSON.stringify(data));
            resolve(data);
          },(error)=>{
            // alert("Data not inserted");
            // alert("data not inserted "+JSON.stringify(error));
            reject(error);
          })
        }); 
      })

    })
  }

  checkIfImageIsFavourite(i){

      var InsertQuery = "SELECT id from favourites where url = ?";
      
      var promise = new Promise((resolve,reject) => {
        window.sqlitePlugin.openDatabase(this.dbData,(db)=>{
          
          db.executeSql(InsertQuery,[i],(data)=>{
            // alert("get single favoute line no. 79");
            // alert(JSON.stringify(data));
            
            resolve(data);
          },(error)=>{
            // alert("Data not inserted");
            // alert("data not inserted "+JSON.stringify(error));
            reject(error);
          })
        }); 
      })
      return promise;
  }

  removeFavourite(i){

    var promise =  new Promise((resolve,reject) => {
        window.sqlitePlugin.openDatabase(this.dbData,(db)=>{
          var query = "DELETE FROM favourites WHERE url=?";
          db.executeSql(query,[i],(data)=>{
            // alert("delete favourite no. 93");
            // alert(JSON.stringify(data));
            
            resolve(data);
          },(error)=>{
            // alert("Data not delected 99");
            // alert("data not delected 99 "+JSON.stringify(error));
            reject(error);
          })
        }); 
      })
      return promise;
  }
  getFavourites(){

      var InsertQuery = "SELECT * from favourites";
      
      var promise =  new Promise((resolve,reject) => {
        window.sqlitePlugin.openDatabase(this.dbData,(db)=>{
          
          db.executeSql(InsertQuery,[],(data)=>{
            resolve(data);
          },(error)=>{
            // alert("Data not inserted 99");
            reject(error);
          })
        }); 
      });
      return promise;
  }
}
