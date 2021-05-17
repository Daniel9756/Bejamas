import { getAllProducts } from "../../db";

export default async function addProduct(req, res) {
  if (req.method !== "GET") {
    return res.status(404);
  }
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Can't fetch product at this time",
    });
  }
}
