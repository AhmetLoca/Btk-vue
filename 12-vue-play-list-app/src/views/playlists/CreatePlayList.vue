<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create Playlist</h4>
    <!-- Title !-->
    <input type="text" placeholder="Playlist Title" v-model="title" required />
    <!-- Description !-->
    <textarea
      placeholder="Playlist Description"
      v-model="description"
      required
    ></textarea>
    <!-- İmage !-->
    <label>Upload playlist cover image</label>
    <input type="file" @change="handleChange" />
    <div class="error">{{ fileError }}</div>
    <button v-if="!isPending">Create</button>
    <button v-else disabled>Saving...</button>
  </form>
</template>

<script>
import { file } from "@babel/types";
import getUser from "@/composables/getUser";
import useStorage from "@/composables/useStorage";
import { ref } from "vue";
import useCollection from "@/composables/useCollection";
import { timestamp } from "@/firebase/config";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { filePath, url, uploadImage } = useStorage();
    const { error, addDoc } = useCollection("playlists");
    const { user } = getUser();
    const router = useRouter();
    const isPending = ref(false);

    const title = ref("");
    const description = ref("");
    const file = ref(null);
    const fileError = ref(null);

    const handleSubmit = async () => {
      if (file.value) {
        isPending.value = true;
        await uploadImage(file.value);
        /* 
        Bir response olusturduk. İçerisine objelerimizi verdik
        response bize bir id ile döndü.
        */
        const res = await addDoc({
          title: title.value,
          description: description.value,
          userId: user.value.uid,
          userName: user.value.displayName,
          coverUrl: url.value,
          filePath: filePath.value,
          songs: [],
          createdAt: timestamp(),
        });
        isPending.value = false;
        if (!error.value) {
          /* router push ile playlisy details'e göndermem lazim. */
          router.push({ name: "playlistdetails", params: { id: res.id } });
        }
      }
    };

    const types = ["image/png", "image/jpeg"];
    const handleChange = (e) => {
      const selected = e.target.files[0];

      if (selected && types.includes(selected.type)) {
        file.value = selected;
        fileError.value = null;
      } else {
        file.value = null;
        fileError.value = "Please select an image (png or jpeg)";
      }
    };

    return {
      title,
      description,
      handleSubmit,
      handleChange,
      fileError,
      isPending,
    };
  },
};
</script>

<style>
input[type="file"] {
  border: 0;
  padding: 0;
}

label {
  font-size: 12px;
  display: block;
  margin-top: 30px;
}
button {
  margin-top: 20px;
}
</style>
