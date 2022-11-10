import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const error = ref(null);
//pending : askıda olan, beklemede
/* isPenging başlangıçta false olsun. */
const isPenging = ref(false);

const login = async (email, password) => {
  error.value = null;
  /* isPenging calismaya basladiginda "true" yapacagiz. */
  isPenging.value = true;
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;
    /* eger cevap geldiyse isPenging false olacak. */
    isPenging.value = false;
    return res;
  } catch (err) {
    console.log(err.value);
    error.value = "Incorrect login credentials";
    /* Bir hata geldiginde, hata durumunda bir istek tamamlanmis oluyor. */
    isPenging.value = false;
  }
};

const useLogin = () => {
  return { error, login, isPenging };
};

export default useLogin;
