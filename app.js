const express = require(`express`);
const app = express();
const routes = require(`./routes/allRoutes`);
const connectDB = require(`./db/connect`);
const notFound = require(`./middleware/notFound`)
const connectionString = `mongodb+srv://user:mongoosedb1@projects.eaza7.mongodb.net/Items-API?retryWrites=true&w=majority`;

app.use(express.json());
app.use(`/items`, routes);
app.use(notFound)

const start = async () => {
  try {
    await connectDB(connectionString);
    app.listen(5000, () => {
      console.log(`server listening...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
