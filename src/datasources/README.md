# Datasources

## Before
In **src/models/README.md** file
## Now
Adding data source from json file
```sh
➜  sale git:(receipt) ✗ lb4 datasource
? Datasource name: db
? Select the connector for db:  In-memory db (supported by StrongLoop)
? window.localStorage key to use for persistence (browser only):
? Full path to file for persistence (server only): ./data/db.json
   create src/datasources/db.datasource.ts
   update src/datasources/index.ts

Datasource Db was created in src/datasources/
```
Create file db.json
```json
{
    "ids": {
        "Receipt": 1
    },
    "models": {
        "Receipt": {}
    }
}
```
## Next step:
In **src/repositories/README.md** file
