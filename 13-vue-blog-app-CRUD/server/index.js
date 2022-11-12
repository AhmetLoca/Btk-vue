import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./router/router.js";
 
const app = express();
app.use(cors());
// string şeklinde gelen data'yi json olarak parse edebilecek.
app.use(express.json());

//dotenv içerisindeki anahtarlari burada kullaniyor olacagiz.
dotenv.config();

// /posts router'inda az once import ettigim router'i kullan.
/*
localhost:3000'in /posts'a gelen istekleri biz router'da handle'liyoruz.
*/
app.use("/posts", router);

//uygulamamizi 5000. port'ta dinleyecegiz.
//Callback function içerisinde yapmak istediğim şey database'e baglanmak.
//uygulamam ne zaman 5000. port'ta beni dinliyor olacak, o an database'e baglanmak istiyorum.
//bunu mongoose ile yapacagiz.
app.listen(process.env.PORT, () => {
  //mongoose'un connect metodu MONGO_URI'i aliyor. Bu connection string'imizi
  // connect metodunun içene pasliyorum. Boylece mongoDB'ye baglanmis oluyorum.

  //MONGO_URI dedikten sonra  benim mongoose içerisine paslamam gereken 2 tane option var.
  // bunun nedeni deprecation warning yani server'i ayaga kaldırdıgım zaman console'da bana
  // bazi uyarilar veriyor. Şunun bitme tarihi yaklaşmış, bu özellik artık kullanilmayacak gibi.
  mongoose
    .connect(process.env.MONGO_URI, {
      /* deprecation warning. Server'i ayaga kaldirdigim zaman console'da bana bazi uyarilar veriyor.
      şunun bitme tarihi yaklasmis şu özellik artik kullanilmayacak tarzı seyler veriyor */
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //mongoose.connect bize promise döndürüyor.
    })
    .then(console.log("connected to db"))
    .catch((err) => console.log(err));
});
