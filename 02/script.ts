const fs2 = require("fs");

const fileRead = (): unknown => {
  return JSON.parse(fs2.readFileSync("./02/bd.json"));
};

const fileWrite = (data: any): void => {
  fs2.writeFileSync("./02/bd.json", JSON.stringify(data));
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

const User1 = {
  name: "Daniel",
  email: "daniel@gmail.com",
  cpf: "123456789-11",
  profession: "student",
  address: {
    zipCode: "12345678",
    street: "A Street",
    neighborhood: "Downtown",
    city: "Londres",
  },
};

registerUser(User1);

const bd = fileRead();
console.log(bd);
