import { getAllArts } from "../../db";

export default async function getAll(req, res) {
  if (req.method !== "GET") {
    return res.status(404);
  }
  try {
    const arts = await getAllArts();
    res.status(200).json(arts);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Can't fetch artworks at this time",
    });
  }
}
