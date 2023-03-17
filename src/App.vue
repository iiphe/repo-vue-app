<template>
  <div>
    <GithubRepo />
  
    
    
  </div>
  <div id="app">

  
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>






export default {
    name: "App",

}

</script>

<style>
/* Some basic styling for the app */
header {
  background-color: #222;
  color: #fff;
  padding: 20px;
  text-align: center;
}

h1 {
  margin: 0;
}

main {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>




