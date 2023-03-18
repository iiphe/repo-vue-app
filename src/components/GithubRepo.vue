<template>
  <!-- <div class="profile-container"> -->
    <!-- <div class="header-container"> -->
      <header class="header">
        <div class="header-body">
          <div class="repo-container">
            <!-- <h2 class="title">Repositories</h2> -->
          </div>

          <img
            class="logo"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          />
          <h3 class="name">Ifeoluwa Favour</h3>

          <a class="username" href="https://github.com/iiphe">@iiphe</a>
          <div>
            <div class="profile-details"> 
              <h3>16 Repositries</h3>
              <h3>1 following</h3>
              <h3>1 follower</h3>
            </div>
           
          </div>
        </div>
      </header>

      <section class="section">
REPOSITORIES
      </section>
    <div class="container">
      
      <div class="table-container">
        <div class="list-title">
  <h2>Repositeries</h2>
</div>
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
              :class="{ disabled: currentPage === pageCount  }"
            >
              <button class="page-link" @click="currentPage++">Next</button>
            </div>
          </div>
        </nav>
      </div>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
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

</style>
