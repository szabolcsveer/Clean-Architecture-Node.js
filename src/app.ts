import express from "express";
import "reflect-metadata";
import morgan from "morgan";

const createBrand = require("./api/brand/create-brand-endpoint");
const listBrands = require("./api/brand/list-brands-endpoint");

const PORT = 3000;
const app: express.Application = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(morgan("combined"));

import { createConnection } from "typeorm";
import { BrandModel } from "./database/models/brand.model";

const connection = createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "root",
  database: "test",
  entities: [BrandModel],
  synchronize: true,
  logging: true,
})
  .then((connection) => {
    // here you can start to work with your entities
  })
  .catch((error) => console.log(error));

app.use("/brand", createBrand);
app.use("/brand", listBrands);


app.listen(PORT, function () {
  console.log(`App is listening on port: ${PORT}`);
});
