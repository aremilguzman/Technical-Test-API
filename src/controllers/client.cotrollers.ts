import { Request, Response } from "express";
import { Client } from "../entities/client";

// client URL controllers
export const createClient = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, age, phone } = req.body;

    const client = new Client();
    client.firstName = firstName;
    client.lastName = lastName;
    client.age = age;
    client.phone = phone;

    await client.save();

    return res.json(client);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getClients = async (req: Request, res: Response) => {
  try {
    const client = await Client.find();

    return res.json({ client });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getClient = async (req: Request, res: Response) => {
  const { id } = req.params;
  const client = await Client.findOneBy({ id: parseInt(req.params.id) });

  if (client) {
    res.json([client]);
  } else {
    res.status(404).json({
      message: `This client don't exist ${id}`,
    });
  }
};

export const updateClient = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const client = await Client.findOneBy({ id: parseInt(req.params.id) });

    if (!client)
      return res.status(404).json({ message: "Client does not exist" });

    await Client.update({ id: parseInt(id) }, req.body);
    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteClient = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const client = await Client.delete({ id: parseInt(id) });

    if (client.affected === 0) {
      return res.status(404).json({ message: "Client not found" });
    }

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
