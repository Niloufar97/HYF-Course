
const database = 'hyf';
const collection = 'Users';

use(database);

db.Users.insertOne({
    name: "Niloufar",
    email: "nilou@gmail.com"
  });
db.Users.insertOne({
    name: "Armin",
    email: "armin@gmail.com"
  });

db.Users.find();
db.Users.find({name: "Niloufar"});
db.Users.countDocuments({age : 20});

db.Users.updateOne({name : "Niloufar"} , {$set {age : 27}});
  
db.Users.deleteOne({name : "Armin"});

db.Users.insertOne({
    name: "Mohammad",
    address: "Aarhus",
    age: 30,
    country: "Iran",
    phone : 61763733
});

db.Users.updateOne({name : "Mohammad"},$set{address : "Isfahan"});

