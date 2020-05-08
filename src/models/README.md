# Models

## Before
In **README.md** file
## Now
Adding model of receipt
```sh
➜  sale git:(receipt) lb4 model
? Model class name: receipt
? Please select the model base class Entity (A persisted model with an ID)
? Allow additional (free-form) properties? No
Model Receipt will be created in src/models/receipt.model.ts

Let's add a property to Receipt
Enter an empty property name when done

? Enter the property name: id
? Property type: number
? Is id the ID property? Yes
? Is id generated automatically? No
? Is it required?: No
? Default value [leave blank for none]:

Let's add another property to Receipt
Enter an empty property name when done

? Enter the property name: commodityId
? Property type: number
? Is it required?: No
? Default value [leave blank for none]:

Let's add another property to Receipt
Enter an empty property name when done

? Enter the property name: dealerId
? Property type: number
? Is it required?: No
? Default value [leave blank for none]:

Let's add another property to Receipt
Enter an empty property name when done

? Enter the property name: shopId
? Property type: number
? Is it required?: No
? Default value [leave blank for none]:

Let's add another property to Receipt
Enter an empty property name when done

? Enter the property name:
   create src/models/receipt.model.ts
   update src/models/index.ts

Model Receipt was created in src/models/
```
## Next step:
In **src/datasources/README.md** file
