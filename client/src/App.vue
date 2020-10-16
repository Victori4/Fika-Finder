<template>
  <div id="app">
    <b-navbar id="nav">
      <div class="container">
        <div>
          <router-link to="/"><img id="logo" src="./assets/img/fikaFinderMug.png"></router-link>
          <router-link to="/">Home</router-link>
          <router-link to="/cafes">Cafes</router-link>
          <router-link to="/categories">Categories</router-link>
        </div>
        <b-navbar-nav class="ml-auto">
          <router-link to="/login">Login</router-link>
        </b-navbar-nav>
      </div>
    </b-navbar>
    <!-- Render the content of the current page view -->
    <router-view/>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col">
            <p>Developed in 2020 <a target="_blank" href="https://git.chalmers.se/courses/dit341/2020/group-22-web">GitLab Repository</a></p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
