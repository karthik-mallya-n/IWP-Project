import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Alice",
  //     email: "abc@gmail.com",
  //     password: "123456",
  //     role: "USER",
  //   },
  // });

  // console.log(user);

  app.get("/users", (req, res) => {
    prisma.user
      .findMany()
      .then((users) => {
        res.json(users);
      })
      .catch((error) => {
        res.json({ error: "An error occurred" });
      });
  });
  app.delete 
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

main()
  .catch((e) => {
    console.log();
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
