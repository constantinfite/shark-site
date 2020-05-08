<template>
  <div id="app">
    <header>
      <div class="container container-nav">
        <nav>
          <a href class="logo-link">
            <img class="logo" src="./assets/images/shark.png" alt />
          </a>
          <div class="menu-btn" @click="toggle">
            <div class="menu-btn_burger"></div>
          </div>
          <!-- <div class="mobile-menu" >
          <span class="line line-top"></span>
          <span class="line line-bottom"></span>
          </div>-->
          <!-- <div class="toggle-icons">
            <i id="menu-btn" class="fas fa-bars"></i>
          </div>-->

          <!-- <ul class="nav-list nav-list-mobile">
            <li class="nav-item">
              
            </li>
          </ul>-->

          <ul class="nav-list">
            <li class="nav-item">
              <router-link to="/">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/informations">Informations</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/species">Species</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/data">Data</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/support">Support</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <router-view />
  </div>
</template>
<script>
const selectElement = element => document.querySelector(element);

export default {
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggle() {
      // selectElement("header").classList.toggle("active");
      if (!this.menuOpen) {
        selectElement(".menu-btn").classList.add("open");
        this.menuOpen = true;
      } else {
        selectElement(".menu-btn").classList.remove("open");
        this.menuOpen = false;
      }
      selectElement("ul").classList.toggle("active");
    }
  }
};
</script>
<style>
ul a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 2rem;
  padding: 0 2rem;
}

ul a.router-link-exact-active {
  color: #42b983;
}

.container-nav {
  max-width: 1300px;
  position: relative;
}
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
  z-index: 1500;
  background-color: rgba(255, 255, 255, 1);
  backdrop-filter: blur(2rem);
}

nav {
  display: flex;
  flex-wrap: wrap;
}
.nav-list {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 10rem;
}
.logo-link {
  margin-right: auto;
  align-items: center;
}
</style>
