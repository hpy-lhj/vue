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
*{  
	  -webkit-touch-callout:none;  /*系统默认菜单被禁用*/   
	  -webkit-user-select:none; /*webkit浏览器*/   
	  -khtml-user-select:none; /*早期浏览器*/   
	  -moz-user-select:none;/*火狐*/   
	  -ms-user-select:none; /*IE10*/   
	  user-select:none;   
} 
 
input{  
	-webkit-user-select:auto; /*webkit浏览器*/     
}
textarea{
	-webkit-user-select:auto; /*webkit浏览器*/
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
