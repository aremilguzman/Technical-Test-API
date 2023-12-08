import { Request, Response } from "express";
import { Product } from "../entities/product";
import { SqlInMemory } from "typeorm/driver/SqlInMemory";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { productName, price, stock } = req.body;

    const product = new Product();
    product.productName = productName;
    product.price = price;
    product.stock = stock;

    await product.save();

    return res.json(product);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const product = await Product.find();

    return res.json({ product });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getProduct = async (req: Request, res: Response) => {
  const { sku } = req.params;
  const product = await Product.findOneBy({ sku: parseInt(req.params.sku) });

  if (product) {
    res.json([product]);
  } else {
    res.status(404).json({
      message: `This client don't exist ${sku}`,
    });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { sku } = req.params;

    const product = await Product.findOneBy({ sku: parseInt(req.params.sku) });

    if (!product)
      return res.status(404).json({ message: "Product does not exist" });

    await Product.update({ sku: parseInt(sku) }, req.body);
    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { sku } = req.params;
    const product = await Product.delete({ sku: parseInt(sku) });

    if (product.affected === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
