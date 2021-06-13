<template>
  <div class="con">
    <Navbar />
    <br>
    <Nuxt />
    <br><br><br>
    <Footer />
  </div>
</template>
<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Navbar, Footer
  }
}
</script>
<style>
.con {
  margin-left: 10px;
  margin-right: 22px;
  margin-top: 5px;
}
</style>