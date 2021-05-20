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
li {
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 12px;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  background-color: #fff;
}
</style>
