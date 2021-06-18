<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="card input-category">
          <div class="card-body">
            <form @submit.prevent="categoriPost" method="post">
              <div class="mb-3">
                <label for="category" class="form-label">Category Name</label>
                <input type="text" class="form-control" v-model="category" id="category" placeholder="Category Name">
              </div>
              <div v-if="errors">
                <div class="alert alert-danger" role="alert">
                  {{errors['category'][0]}}
                </div>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" v-model="desc" id="description" rows="3"></textarea>
              </div>
              <div class="mb-3">
                <button type="submit" class="btn btn-outlines">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-md-7">
        <div class="card index-category">
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Category Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(categories, index) in categori" :key="index" style="color:white">
                  <td>{{categories.id}}</td>
                  <td>{{categories.category}}</td>
                  <td>
                    <nuxt-link :to="'kategori/' + categories.id" class="btn btn-info">Edit</nuxt-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  data() {
    return {
      categori: {},
      category: '',
      desc:'',
      errors: null
    }
  },

  mounted() {
    this.getCategori()
  },

  methods: {
    async categoriPost() {
      try {
        await this.$axios.post('category', {
          category: this.category,
          desc: this.desc
        })
        .then(() => {
         this.category = '',
         this.desc = '',

        this.$router.push('kategori')
        this.getCategori()
        })

      } catch (e) {
        this.errors = e.response.data.errors
      }
    },

    getCategori() {
      this.$axios.get('category')
      .then(res => {
        console.log(res);
        this.categori = res.data.data
      })
      .catch(e => {
        console.log(e.res.data)
      })
    }
  },
}
</script>
<style>
.input-category {
  margin-top: 15px;
  box-shadow: 15px 12px 0px -1px #4b5d67 ;
  background-color: #404b69;
}
.index-category {
  margin-top: 15px;
  box-shadow: 15px 12px 0px -1px #4b5d67 ;
  background-color: #404b69;
}
thead {
  color: yellow;
}
.form-label {
  color: yellow;
}
.btn-outlines {
  box-shadow: white;
  color: #4b5d67;
  background-color: #ffffff;
  border-color: #4b5d67;
  letter-spacing: 0.05em;
}
</style>