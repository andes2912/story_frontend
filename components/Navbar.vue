<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <NuxtLink class="navbar-brand text-white font-monospace" to="/">Story</NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <template v-if="isLoggedIn">
            <li class="nav-item">
              <nuxt-link to="/artikel" class="nav-link text-white font-monospace">Article</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/kategori" class="nav-link text-white font-monospace">Category</nuxt-link>
            </li>
          </template>
        </ul>
        <ul class="navbar-nav">
          <template v-if="isLoggedIn">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle font-monospace" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{user.name}}
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><nuxt-link class="dropdown-item font-monospace" to="/profile">Profile</nuxt-link></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item font-monospace" href="" @click="logout">Logout</a></li>
              </ul>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <nuxt-link class="nav-link btn btn-login shadow text-white" to="/login"> Login <i class="bi bi-box-arrow-in-right"></i></nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
        'user',
        'isLoggedIn'
    ])
  },
  methods: {
   async logout() {
    await this.$auth.logout();
   }
  }
}
</script>
<style>
 .navbar {
   background-color: #6b778d;
   box-shadow: 15px 12px 0px -1px #4b5d67 ;
   border: 2px solid;
 }
 .btn-login {
  box-shadow: white;
  color: #fdfeff;
  background-color: #e4473279;
  border-color: #4b5d67;
  letter-spacing: 0.05em;
}
</style>