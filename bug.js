```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("650702896565656565656565")}, {$inc: {counter: '1'}});
```