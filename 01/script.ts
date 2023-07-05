const pathFile: string = "./01/bd.json";

//sync functions
const fs = require("fs");

const userRecord = {
  username: "João",
  age: 25,
  city: "Curitiba",
};

const readFile = (pathFile: string): unknown => {
  const jsonFile = fs.readFileSync(pathFile);
  return JSON.parse(jsonFile);
};

const writeFile = (database: object, pathFile: string): void => {
  const jsJsonFile = JSON.stringify(database);
  fs.writeFileSync(pathFile, jsJsonFile);
};

//console.log(readFile(pathFile));
//writeFile(userRecord, pathFile);

//assync functions
const fsPromises = require("fs/promises");

const writeFileJson = async (
  pathFile: string,
  database: object
): Promise<void> => {
  const databaseJson = await JSON.stringify(database);
  fsPromises.writeFile(pathFile, databaseJson);
};

const readFileJson = async (pathFile: string): Promise<object> => {
  const databaseJson = await fsPromises.readFile(pathFile);
  const databaseJs = JSON.parse(databaseJson);
  console.log(databaseJs);
  return databaseJs;
};

const userRecord2 = {
  username: "Daniel",
  age: 44,
  city: "Fortaleza",
};

//writeFileJson(pathFile, userRecord);
//readFileJson(pathFile);
