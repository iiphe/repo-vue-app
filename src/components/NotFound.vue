<template>
  <div class="error-container">
<div>
  <h1 class="error">404 Page </h1>
    <h2 className="not-found">Oops,Page not Found!</h2>
</div>  
<router-link to="/" class="router-link">
  <button class="error-button">Go  back to Home Page</button>
</router-link>
</div>
</template>

<script>
export default {
  name: "NotFound",
}
</script>

<style>
.error {
margin: 20px 0;
font-size: 40px;
font-weight: 800;
}
.not-found {
margin: 20px 0;
font-size: 30px;
font-weight: 600;
}
.error-container {
margin-top: 6rem;
padding: 5rem;
text-align: center;
}
.error-button {
margin: 30px 0;
cursor: pointer;
color: white;
background-color: rgb(105, 27, 105);
padding: 20px 20px;
border: none;
text-align: center;
border-radius: 10px;
width: 200px;
}
</style>