<template>
  <main>
    <div>
      <nav class="nav-bar">
        <router-link to="/">Back</router-link>
      </nav>
    </div>
    <div class="details-container">
      <div class="repo-details">
        <h1>Repository Details.</h1>
        <h4>Repo Name: {{ repoDetail.name }}</h4>
        <h4>Description: {{ repoDetail.description }}</h4>
        <h4>Language: {{ repoDetail.language }}</h4>
        <h4>Stars: {{ repoDetail.size }}Kb</h4>
      </div>
    </div>
  </main>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    let repoDetail = ref({});
    const apiUrl = "https://api.github.com/repos/iiphe/";

    const route = useRoute();
    onMounted(() => {
      fetchAllRepoDetail();
    });
    const fetchAllRepoDetail = () => {
      fetch(apiUrl + route.params.name)
        .then((response) => response.json())
        .then((data) => {
          repoDetail.value = data;
          console.log("iphe work", data);
        });
    };
    return {
      fetchAllRepoDetail,
      repoDetail,
    };
  },
};
</script>

<style>
.repo-details {
  padding: 30px;
  width: 400px;
  height: 250px;
  border: 1px solid rgb(223, 213, 213);
  display: block;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  /* border-style: outset;  */
  transition: background-color 0.3s;
  box-shadow: 3px 3px 3px rgb(182, 170, 170);
}
.details-container {
  padding: 20px;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 10%;
}
.nav-bar {
  color: #ddd;
  background-color: #ddd;
  border: 1px solid grey;
  width: 40px;
}
.nav-bar:hover {
  background-color: rgb(211, 206, 206);
  color: white;
}
</style>
