const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");
require('dotenv').config()

async function startServer(){
  const app = express();

  const apolloServer = new ApolloServer({
       typeDefs,
       resolvers
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({app: app});
   
  app.use((req, res) => {
      res.send("Hello from apollo server")
  })

  await mongoose.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  console.log("Mongo DB Connected successfully...");
  const port = process.env.PORT

  app.listen(port, ()=> console.log("Server running on port 4000"))
}
startServer();