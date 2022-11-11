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
    
Yukarida belirledigim şema bu modelin içerisine aktariliyor.
Bu model'in dökümanını olustururken bu şema kullanılacak.
Bu şemadaki alanları doldurarak mongodb'de bu modele ait bir döküman 
tutabiliyor olacagim.

Ne zaman yeni bir dokuman mongoDb'ye gönderecegim o zaman mongodb bir tane
collection olusturacak.
*/
const Post = mongoose.model("post", postSchema);

/* router'a bu Post'u import edip database'de cesitli islemler gerceklestirecegim
 */
export default Post;
