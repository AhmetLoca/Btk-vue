<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="show">
        {{ project.title }}
      </h3>
      <div class="icons">
        <!-- Done !-->
        <span @click="toggleComplete" class="material-icons tick">done</span>
        <!-- Edit !-->
        <router-link :to="{ name: 'EditProject', params: { id: project.id } }"
          ><span class="material-icons">edit</span></router-link
        >
        <!-- Delete !-->
        <span @click="deleteTask" class="material-icons">delete</span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetails: false,
      /*
      props'lardan projects geliyor.
      Artı olarak id'de gelsin.
      */
      uri: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  methods: {
    /* TOGGLE İŞLEMİ için kullaniyoruz */
    show() {
      this.showDetails = !this.showDetails;
    },

    /* DONE */
    toggleComplete() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        /* 
        Neyi degistirmek istiyorsam obje olarak gönderebilirim 
        içerisine. */
        body: JSON.stringify({ complete: !this.project.complete }),
      })
        .then(() => this.$emit("complete", this.project.id))
        .catch((err) => console.log(err.message));
    },
    /* DELETE */
    deleteTask() {
      /* fetch ile delete isteklerini yapabiliyorduk.
       */
      fetch(this.uri, { method: "DELETE" })
        .then(() =>
          /*
      this.$emit ile yukariya bir event gönderebiliyoruz.
      delete event'i diyorum.
      this.project.id'yi yukariya gönderecegim.
      */
          this.$emit("delete", this.project.id)
        )
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style>
.project {
  margin: 20px auto;
  background: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.8);
  border-left: 4px solid #ff8200;
}
h3 {
  cursor: pointer;
}
.material-icons {
  cursor: pointer;
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
}
.material-icons:hover {
  color: #000;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.project.complete {
  border-left: 4px solid #76dd78;
}
.project.complete .tick {
  color: #76dd78;
}
</style>
