<template>
  <section class="hero shark">
    <div class="container">
      <div class="title">
        <h2 class="title-heading">Learn everything about Sharks</h2>
        <h3 class="title-sub-heading">The first website on sharks</h3>
        <div class="cta">
          <a-cta-link>Infos</a-cta-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {}
};
</script>

<style>
.shark {
  width: 100%;
  background-repeat: no-repeat;
  padding-top: 12rem;
  background-size: auto 100rem;
  background-position: center;
  background-image: url("../assets/images/blacktip.jpg");
}
.title {
  color: #fff;
  text-align: start;
  padding-bottom: 2rem;
}

.title-heading {
  font-size: 5rem;
}
</style>
