import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger/swagger.config";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req: Request, res: Response) => {
  res.send("API 2 - Funcionando");
});

app.get("/user", async (req: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar usuários" });
    }
  });
  
  app.get("/user/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
      });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "Usuário não encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar usuário" });
    }
  });
  
  app.post("/user", async (req: Request, res: Response) => {
    const { name, email } = req.body;
  
    try {
      const user = await prisma.user.create({
        data: { name, email },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar usuário" });
    }
  });
  
  app.put("/user/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email } = req.body;
  
    try {
      const user = await prisma.user.update({
        where: { id: Number(id) },
        data: { name, email },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar usuário" });
    }
  });
  
  app.delete("/user/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      await prisma.user.delete({
        where: { id: Number(id) },
      });
      res.status(200).json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar usuário" });
    }
  });
  
  export default app;