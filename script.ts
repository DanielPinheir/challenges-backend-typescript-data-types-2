const pathFile: string = "./bd.json";

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

//read file JSON
const fileRead = (): unknown => {
  return JSON.parse(fs.readFileSync("./bd.json"));
};
//write file JSON
const fileWrite = (data: any): void => {
  fs.writeFileSync("./bd.json", JSON.stringify(data));
};

//create structure type
type Address = {
  zipCode: string;
  street: string;
  addressComplement?: string;
  neighborhood: string;
  city: string;
};

type User = {
  name: string;
  email: string;
  cpf: string;
  profession?: string;
  address: Address | null;
};

const registerUser = (data: User): User => {
  const bd = fileRead() as User[];
  bd.push(data);
  fileWrite(bd);
  return data;
};

const listUser = (): User[] => {
  return fileRead() as User[];
};

const detailUser = (cpf: string): User => {
  const bd = fileRead() as User[];
  const user = bd.find((user) => String(user.cpf) === String(cpf));

  if (!user) {
    throw new Error("User not found.");
  }
  return user;
};

const updateUser = (cpf: string, data: User): User => {
  const bd = fileRead() as User[];
  const user = bd.find((user) => String(user.cpf) === String(cpf));

  if (!user) {
    throw new Error("User not found.");
  }
  //copy data of source object to target object
  Object.assign(user, data);
  fileWrite(bd);
  return data;
};

const deleteUser = (cpf: string): User => {
  const bd = fileRead() as User[];
  const user = bd.find((user) => String(user.cpf) === String(cpf));

  if (!user) {
    throw new Error("User not found.");
  }

  const databaseDeleteUser = bd.filter(
    (user) => String(user.cpf) !== String(cpf)
  );

  fileWrite(databaseDeleteUser);

  return user;
};

const filterUser = (profession?: string): User[] => {
  const bd = fileRead() as User[];

  const users = bd.filter((user) => {
    if (profession) {
      return String(user.profession) === String(profession);
    }
    return user;
  });
  return users;
};
