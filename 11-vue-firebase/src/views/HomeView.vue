<template>
  <div class="home">
    <h2>Firebase</h2>
  </div>
</template>

<script>
import { onMounted } from "vue";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore/lite";
import { fb } from "../firebase/config";

export default {
  name: "HomeView",
  components: {},
  setup() {
    onMounted(async () => {
      const db = getFirestore(fb);
      const fbRef = collection(db, "books");
      const fbDocs = await getDocs(fbRef);
      const data = fbDocs.docs.map((doc) => doc.data());
      const docID = fbDocs.docs.map((doc) => doc.id);

      /* add  */

      // addDoc(fbRef, {
      //   name: "Apology of Socrates",
      //   author: "Plato",
      //   pageCount: 200,
      // });

      /* delete */

      // const docRef = doc(db, "books", "mBggYFcjbNhjef7gv31A");
      // deleteDoc(docRef);

      /* query  */

      // const q = query(fbRef, where("pageCount", "==", 200));
      // onSnapshot(q, (ss) => {
      //   let books = [];
      //   ss.docs.forEach((doc) => {
      //     books.push({ ...doc.data(), id: doc.id });
      //   });
      //   console.log(books);
      // });

      const docRef = doc(db, "books", "E5EeMvoQ7LqncsWCBJQS");
      updateDoc(docRef, {
        pageCount: 4000,
      });
      return data;
    });
  },
};
</script>
