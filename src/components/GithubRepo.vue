<template>
  <div class="main-container">
    <div class="header-container">
      <header class="header">
        <div class="header-body">
          <div class="repo-container">
            <h2 class="title">Repositories</h2>
          </div>

          <img
            class="logo"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          />
          <h3 class="name">Ifeoluwa Favour</h3>

          <a class="username" href="https://github.com/iiphe">@iiphe</a>
          <a
            class="follow-logo"
            href="https://cdn1.iconfinder.com/data/icons/twitter-ui-glyph/48/Sed-25-512.png"
          ></a>
        </div>
      </header>
    </div>

    <div class="container">
      <div class="table-container">
        <!-- <table class="table is-bordered is-striped is-hoverable is-fullwidth">
          <tbody> -->

        <div
          class="repo-container"
          v-for="repo in paginatedRepos"
          v-bind:key="repo.id"
        >
          <router-link :to="'/RepoDetail/' + repo.name">
            <h3 class="repo-name">{{ repo.name }}</h3>
          </router-link>
        </div>
        <!-- </tbody>
        </table> -->
        <nav>
          <div class="pagination">
            <div class="page-item" :class="{ disabled: currentPage === 1 }">
              <button class="page-link" @click="currentPage--">Previous</button>
            </div>

            <div
              class="page-item"
              :class="{ disabled: currentPage === pageCount }"
            >
              <button class="page-link" @click="currentPage++">Next</button>
            </div>
          </div>
        </nav>
      </div>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  data() {
    return {
      repos: [],
      currentPage: 1,
      perPage: 5,
      totalItems: 15,
    };
  },

  created() {
    // Make a request to the Github API to get the list of repositories
    // and store the results in the `repos` data property
    axios
      .get(
        "https://api.github.com/users/iiphe/repos?page=${this.currentPage}&per_page=${this.perPage}"
      )
      .then((response) => {
        this.repos = response.data;
        this.totalItems = response.headers["x-total-count"];
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    pageCount() {
      return Math.ceil(this.totalItems / this.perPage);
    },
    paginatedRepos() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.repos.slice(start, end);
    },
  },
};
</script>

<style>
body {
  font: 15px/1.8 "Poppins", sans-serif !important;
}
.main-container {
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
}
.header {
  background-color: rgb(40, 40, 41);
  width: 100%;
  margin-bottom: 40px;
}
.header-body {
  display: flex;
}
.username {
  color: rgb(190, 203, 214);
  font-size: large;
  font-style: normal;
  font-weight: 300;
  margin-top: 100px;
  margin-left: 10px;
}
.name {
  color: rgb(190, 203, 214);
  font-size: x-large;
  margin-bottom: 20px;
  margin-top: 40px;
  padding-left: 10px;
}
.title {
  color: rgb(190, 203, 214);
  padding: none;
  margin-top: 100px;
  margin-bottom: none;
  margin-left: 30px;
}
.logo {
  width: 60px;
  height: 60px;
  background-color: aliceblue;
  border-radius: 40px;
  margin-top: 30px;
  margin-bottom: none;
  display: flex;
  margin-left: 30%;
}
.table-container {
  text-align: center;
  padding: 20px;
  margin-left: 20%;
  margin-right: 10%;
  margin-top: 0%;
  margin-bottom: 20%;
  justify-content: center;
}
.repo-logo {
  width: 30px;
  margin-top: 25px;
}
.repo-container {
  display: flex;
  justify-content: center;
  margin-left: 20px;
}
.repo-name {
  width: 300px;
  height: 50px;
  border: 1px solid grey;
  display: block;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: none;
  margin-bottom: 30px;
  border-style: outset;
  transition: background-color 0.3s;
}
.repo-name:hover {
  color: white;
  background-color: black;
}
.pagination {
  display: flex;
  justify-content: right;
}
.pagination a {
  color: black;
  float: right;
  /* padding: 8px 16px; */
  text-decoration: none;
  transition: background-color 0.3s;
  border: 1px solid #ddd;
  width: 0px;
  height: px;
}
.pagination a:hover:not(.active) {
  background-color: #ddd;
}
</style>
