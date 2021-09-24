import "dotenv/config";
import express from "express";
import cors from "cors";
import compress from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import models, { sequelize } from "./models/schemas/IndexModels";
import router from "./routes/IndexRoute";

const port = process.env.PORT || 1337;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet()); //bisa dikenali SEO
app.use(compress());
app.use(cors());

app.use(async (req, res, next) => {
  req.context = { models };
  next();
});

app.use(process.env.URL_DOMAIN, (req, res) => {
  res.send("Hello eShopay");
});

app.use(process.env.URL_API + "/categories", router.CategoriesRoute);
app.use(process.env.URL_API + "/products", router.ProductsRoute);

const dropDatabaseSync = false;

sequelize.sync({ force: dropDatabaseSync }).then(async () => {
  if (dropDatabaseSync) {
    console.log("Database do not drop");
  }

  app.listen(port, () => console.log(`listen in ${port}`));
});

export default app;
