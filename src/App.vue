<template>
  <div id="app">
    <header>
      <div class="container container-nav">
        <nav>
          <div class="logo-container">
            <a href class="logo-link">
              <img class="logo" src="./assets/images/shark.png" alt />
            </a>
            <div class="menu-btn" @click="toggle">
              <div class="menu-btn_burger"></div>
            </div>
          </div>

          <div class="main-menu-container">
            <ul class="nav-list">
              <li class="nav-item">
                <router-link to="/">Home</router-link>
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
          </div>
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
      selectElement(".main-menu-container").classList.toggle("active");
      // selectElement("nav").classList.toggle("nav");
    }
  }
};
</script>
<style>
.nav-list .nav-item {
  font-weight: bold;
  color: #1a1a1a;
  font-size: 1.4rem;
  padding: 0 1rem;
}

ul li a {
  color: #e9e9e9;
}

ul a.router-link-exact-active {
  color: #f9df6f;
}

header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1500;
  /* background: linear-gradient( 
    180deg,
    #ffffff,
    #47a6c4,
    #217eb5,
    #1d328f,
    #1c1867
  );*/
  background: #fff;
  backdrop-filter: blur(2rem);
}

nav {
  position: relative;
  z-index: 1500;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.nav-list {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-container {
  margin-right: auto;
  display: flex;
  align-items: center;
}
.main-menu-container {
  display: flex;
}
.logo {
  width: 5rem;
}
.logo-link {
  align-items: center;
}
</style>
