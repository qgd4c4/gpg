<template>
  <div class="header">
    <img src="../assets/gpgLogo.png" />
    <nav>
      <li class="menulist">
        <ul>
          <router-link to="/playlist">Playlist</router-link>
        </ul>
        <ul>
          <router-link to="/gallery">Gallery</router-link>
        </ul>
      </li>
    </nav>
  </div>
  <div class="routeView">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
@font-face {
  font-family: "LINESeedKR-Bd";
  src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2")
    format("woff2");
  font-weight: 700;
  font-style: normal;
}

img {
  display: block;
  margin-left: 170px;
  width: 200px;
}

nav {
  display: flex;
  background-color: #3b4890;
  width: 100%;
  height: 44px;
  margin-left: 0px;
  color: white;
  font-weight: bold;
}

.menulist {
  padding-left: 140px;
  display: flex;
  flex-direction: row;
  font-family: "LINESeedKR-Bd", "sans-serif";
  font-size: 14px;
  line-height: 46px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}

:link,
:visited {
  color: white;
  text-decoration: none;
}

.routeView {
  width: 100%;
  height: 100vh;
}
</style>
