import express from "express";
import mongoose from "mongoose";
/* router'a posts.js'i(db) import ettim. Çünkü database'de çeşitli 
işlemler yapacagım. Bütün işlemlerimi olusturdugum bu model uzerınden
gerceklestirecegim. */
import Post from "../db/posts.js";

/* bu url'le gelen istekleri burada handle'liyacagiz. */
const router = express.Router();

/* 
Birisi localhost:3000'e get istegi yaparsa 
o zaman ben database'e butun post'larimi
cekecegim. 
*/

// bütün post'lari cekme istegi
router.get("/", async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.json(allPosts);
  } catch (error) {
    console.log(error);
  }
});

//sadece cekmek istedigim tek post islemi
router.get("/:id", async (req, res) => {
  /* 
    req.params sayesinde direkt id'yi
  */
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) return;
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
});

//gönderi olusturma istegi
router.post("/", async (req, res) => {
  try {
    /* 
    Kullanicinin gönderdigi bilgileri req.body ile alabilirim
    req.body bizim post'umuzun bilgileri
    */
    const post = req.body;
    const createdPost = await Post.create(post);
    //201 kodu yeni bir şey oluşturuldugu bize gösteriyor.
    res.status(201).json(createdPost);
  } catch (error) {
    console.log(error);
  }
});

// update istegi bu istek o gönderinin id'sine geliyor olacak.
//':' burada dinamik bir şey oldugunu gösteriyor.
//Yani ben hangi post'u update etmek istiyorsam
//bana o post'un id'si geliyor.
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, creator } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("Post bulunamadi");

    const updatedPost = { title, content, creator, _id: id };
    await Post.findByIdAndUpdate(id, updatedPost, { new: true });
    res.json(updatedPost);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndRemove(id);
    res.json({ message: "Post silindi" });
  } catch (error) {
    console.log(error);
  }
});

export default router;
