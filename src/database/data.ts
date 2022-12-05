import dotenv from "dotenv";
dotenv.config();

const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient( process.env.MONGODB_URL as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


/// MongoDB data post
export  async function postDataToMonogoDB() {
  try {
    await client.connect();
    console.log("monhodb connection!!")
    const collection = client.db("deneme").collection("deneme");

    const filter= {
      name:"deneme",
     // email:"deneme@deneme.com",
      };

      const updateData= {
        //name: "deneme3",
        $set:{email:"update mail",}
        };

    let sendDataToMongoDB= await collection.updateOne(filter,updateData);

/// tek set veri ekleneceğinde insertOne kullanımı    
    // let sendDataToMongoDB= await collection.insertOne(
    //   {
    //     name:"deneme",
    //     email:"deneme@deneme.com",
    //   },
    // );

///Birden çok veri ekleneceğinde insertMany kullanımı

    // let sendDataToMongoDB= await collection.insertMany(
    // [  {
    //   name:"deneme1",
    //   email:"deneme@deneme.com",
    // },
    // {
    //   name:"deneme2",
    //   email:"deneme@deneme.com",
    // },
    // {
    //   name:"deneme3",
    //   email:"deneme@deneme.com",
    // },]
    // );
       
    console.log("yazdırdı")
  } finally {
    await client.close();
  }
}

///MongoDB data read

// export  async function mongoDBConnection() {
//   try {
//     await client.connect();
//     console.log("monhodb connection!!")
//     const collection = client.db("deneme").collection("deneme");
//     let dataFromMongo= await collection.find().toArray();
//        console.log(dataFromMongo);
//     console.log("yazdırdı")
//   } finally {
//     await client.close();
//   }
// }