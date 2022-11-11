import express from "express";
import mongoose from "mongoose";
import Post from "../db/posts.js";

const router = express.Router();

/* birisi localhost:6000'e get istegi yaparsa o zaman ben database'e butun post'larimi
cekecegim.
 */

// bütün post'lari cekme istegi
router.get("/", async (req, res) => {
  res.json({ message: "Bu bir get istegi" });
});

//sadece cekmek istedigim tek postun idsi.
router.get("/:id", async (req, res) => {
  res.json({ message: "Bu bir get2 istegi" });
});

//gönderi olusturma istegi
router.post("/", async (req, res) => {
  res.json({ message: "Bu bir post istegi" });
});

// update istegi bu istek o gönderinin id'sine geliyor olacak. ':' burada dinamik bir şey oldugunu
// gösteriyor. Yani ben hangi post'u update etmek istiyorsam bana o post'un id'si geliyor.
router.put("/:id", async (req, res) => {
  res.json({ message: "Bu bir update istegi" });
});

router.delete("/:id", async (req, res) => {
  res.json({ message: "Bu bir delete istegi" });
});

export default router;
