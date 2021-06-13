<template>
  <section class="login">
		<div class="row justify-content-sm-center h-100">
      <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
        <div class="card logIn">
          <div class="card-body p-5">
            <div class="alert alert-danger" v-for="(error, index) in errors" :key="index">
              {{ error[0] }}
            </div>
            <h1 class="fs-4 card-title fw-bold mb-4 text-center font-monospace">Login</h1>
            <form method="POST" class="needs-validation" novalidate="" autocomplete="off" @submit.prevent="userLogin">
              <div class="mb-3">
                <label class="mb-2 font-monospace" for="email">E-Mail Address</label>
                <input id="email" type="email" class="form-control" v-model="login.email" required autofocus>
              </div>

              <div class="mb-3">
                <div class="mb-2 w-100">
                  <label class="font-monospace" for="password">Password</label>
                </div>
                <input id="password" type="password" class="form-control" v-model="login.password" required>
              </div>

              <div class="d-flex align-items-center">
                <button type="submit" class="btn btn-outline shadow">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div class="card-footer py-3 border-0">
            <div class="text-center">
              Don't have an account? <nuxt-link to="register" class="text-dark">Create</nuxt-link>
            </div>
          </div>
        </div>
      </div>
		</div>
	</section>
</template>

<script>
export default {
  middleware: 'guest',

  data() {
    return {
      login: {
        email: '',
        password: ''
      },
      errors: null
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', {
           data: this.login
        })
        this.$router.push('/home');

      } catch (e) {
        this.errors = e.response.data.errors
      }
    }
  }
}
</script>
<style>
.logIn {
  box-shadow: 15px 12px 0px -1px #4b5d67 ;
  background-color: #404b69;
  color: yellow;
}

.btn-outline {
  box-shadow: white;
  color: #4b5d67;
  background-color: #ffffff;
  border-color: #4b5d67;
  letter-spacing: 0.05em;
}
</style>
