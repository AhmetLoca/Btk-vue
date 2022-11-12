<template>
  <div class="container">
    <div v-for="post in posts" :key="post._id" class="card my-5">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ post.title }}</p>
          </div>
        </div>

        <div class="content">
          {{ post.content }}
          <p />
          <strong>Creator:{{ post.creator }}</strong>
        </div>
      </div>
      <div class="card">
        <footer class="card-footer">
          <button
            @click="editPost(post._id)"
            class="card-footer-item button is-info is-large is-light is-outlined"
          >
            Edit
          </button>
          <button
            @click="removePost(post._id)"
            class="card-footer-item button is-danger is-large is-light is-outlined"
          >
            Delete
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    /*
      Bunu database'ten cektikten sonra
      güncelleyecegiz ve icerisine posts'larimizda dolduracagiz.
    */
    const posts = ref([]);
    const router = useRouter();
    /*
    postman'de yaptıgımız butun işlemleri frontend'imizde
    gerceklestirecegiz. */
    const API_URL = "http://localhost:3000/posts";

    /* post listim ana sayfada render edilir edilmez
        buradaki getPosts calisacak. Ve ben 
        database'e gidip oradaki post 'larimi cekebiliyor
        olacagim.'
    */
    onMounted(() => {
      getPosts();
    });

    /* postlari cekme islemi */
    async function getPosts() {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        posts.value = json;
      } catch (error) {
        console.log(error);
      }
    }

    /* postlari silme islemi */
    async function removePost(_id) {
      const response = await fetch(`${API_URL}/${_id}`, {
        method: "DELETE",
      });
      getPosts();
    }

    async function editPost(_id) {
      router.push({
        name: "update",
        params: {
          id: _id,
        },
      });
    }

    return {
      posts,
      removePost,
      editPost,
    };
  },
};
</script>

<style></style>
