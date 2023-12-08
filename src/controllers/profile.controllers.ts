import { Request, Response } from "express";
import { Profile } from "../entities/profile";

export const createProfile = async (req: Request, res: Response) => {
  try {
    const { username, password, role } = req.body;

    const existUser = await Profile.findOne({ where: { username } });
    if (existUser) {
      return res.status(404).json({ message: "Username already exist" });
    }

    const profile = new Profile();
    profile.username = username;
    profile.password = password;
    profile.role = role;

    await profile.save();

    return res.json(profile);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getProfile = async (req: Request, res: Response) => {
  try {
    const profile = await Profile.find();

    return res.json({ profile });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getUsername = async (req: Request, res: Response) => {
  const { id } = req.params;
  const profile = await Profile.findOneBy({ id: parseInt(req.params.id)});

  if (profile) {
    res.json([profile]);
  } else {
    res.status(404).json({
      message: `This profile don't exist ${id}`,
    });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const profile = await Profile.findOneBy({ id: parseInt(req.params.id) });

    if (!profile)
      return res.status(404).json({ message: "profile does not exist" });

    await Profile.update({ id: parseInt(id) }, req.body);
    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const profile = await Profile.delete({  id: parseInt(id)});

    if (profile.affected === 0) {
      return res.status(404).json({ message: "Client not found" });
    }

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
