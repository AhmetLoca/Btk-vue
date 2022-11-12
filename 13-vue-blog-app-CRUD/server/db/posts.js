import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
});

/* 
Ben bu şemayı kullanarak bir tane database modeli olusturacagim.
Model'imin ismi post olsun.
    
Yukarida belirledigim şema bu MODELİN içerisine AKTARILIYOR.
BU MODELİN DÖKÜMANI OLUŞTURULURKEN BU ŞEMA KULLANILACAK.

Bu şemadaki alanları doldurarak mongoDB'de bu modele 
ait bir döküman tutabiliyor olacagim.

Ne zaman yeni bir döküman mongoDb'ye gönderecegim 
O zaman mongodb bir tane collection olusturacak.
*/

/* DATABASE MODELİ */
/*
mongodb bunun adına otomatik olarak 's takısı getiriyor
Çoğul hale getirip bir tane collection olusturuyor.
*/
const Post = mongoose.model("post", postSchema);

/* 
Router'a bu Post'u import edip database'de 
cesitli islemler gerceklestirecegim
*/
export default Post;
