import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1V3adCj9qBuxJ35idwj4OsMqHxl7Xf4s",
  authDomain: "vue3-9d65a.firebaseapp.com",
  projectId: "vue3-9d65a",
  storageBucket: "vue3-9d65a.appspot.com",
  messagingSenderId: "560871736342",
  appId: "1:560871736342:web:9a5c7fd894eefc7b58a137",
};

const fb = initializeApp(firebaseConfig);

export { fb };
