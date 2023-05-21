const { MongoClient } = require('mongodb');

async function main() {

    const mongoDBPassword = process.env.PASSWORD;
    const mongoDBPORT = process.env.PORT;
    // uri is from mongodb account > Connect > Connect your app > Driver: Node
    const uri = 
    `mongodb+serv://admin:${mongoDBPassword}@cluster0.${mongoDBPORT}.mongodb.net/?retryWrites=true&w=majority`;
  
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await companiesAndHelmets(client, "CA");
        console.log("Finding shops");
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function companiesAndHelmets(client, state){
    const pipeline = [
      {
        '$search': {
          'index': 'default', 
          'text': {
            'query': 'FREE', 
            'path': [
              'cost', 'website', 'name'
            ]
          }
        }
      }, {
        '$match': {
          'state': 'CA'
        }
      }, {
        '$match': {
          'helmets': 'TRUE'
        }
      }
    ];
      const aggCursor = client.db("freebikefinder").collection("companies").aggregate(pipeline);
      await aggCursor.forEach(companyList => {
        console.log(`${companyList._id}: ${companyList.name}`);
      })
}
