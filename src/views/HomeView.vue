<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import NewComponent from '../components/NewComponent.vue';
</script>

<template>
  <main>
<!--    <TheWelcome />-->
    <NewComponent />
    <div class="home">
      <h1>This is a home page</h1>
    </div>
  </main>
</template>
<style>
@media (min-width: 1024px) {
  .home {
    /*min-height: 100vh;*/
    display: flex;
    align-items: center;
  }
}
</style>
