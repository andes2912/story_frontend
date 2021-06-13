<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <div class="card input-category">
          <div class="card-body">
            <form @submit.prevent="categoryUpdate" method="post">
              <div class="mb-3">
                <label for="category" class="form-label">Category Name</label>
                <input type="text" class="form-control" v-model="detail.category" id="category" placeholder="Category Name">
              </div>
              <div v-if="errors">
                <div class="alert alert-danger" role="alert">
                  {{errors['category'][0]}}
                </div>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" v-model="detail.desc" id="description" rows="3"></textarea>
              </div>
              <div class="mb-3">
                <button type="submit" class="btn btn-outline">Update</button>
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
                    <a href="" class="btn btn-info ">Edit</a>
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
      detail: [],
      errors: null
    }
  },

  mounted() {
    this.getCategori(),
    this.categoriDetail()
  },

  methods: {
    categoriDetail() {
      try {
        this.$axios.get(`category/${this.$route.params.id}`)
        .then(res => {
          this.detail = res.data.data
        })
      } catch (error) {
        console.log(error.res.data.errors);
      }
    },
    async categoryUpdate() {
      try {
        await this.$axios.put(`category/${this.$route.params.id}`, {
          category: this.detail.category,
          desc: this.detail.desc
        })
        .then(() => {
          this.$router.push('kategori')
        })

      } catch (e) {
        this.errors = e.response.data.errors
      }
    },

    getCategori() {
      this.$axios.get('category')
      .then(res => {
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
.btn-outline {
  box-shadow: white;
  color: #4b5d67;
  background-color: #ffffff;
  border-color: #4b5d67;
  letter-spacing: 0.05em;
}
</style>