<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style>
html,
body,
div,
p,
span,
ul,
li,
input,
textarea,
select,
a:focus {
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 12px;
  outline: none;
}
body {
  width: 100vw;
  overflow-x: hidden;
  background-color: #000;
}

input {
  -webkit-user-select: auto; /*webkit浏览器*/
}
textarea {
  -webkit-user-select: auto; /*webkit浏览器*/
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  background-color: #000;
}
</style>
