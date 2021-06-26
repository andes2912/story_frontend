<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7">
        <div class="card input-category">
          <div class="card-body">
            <form @submit.prevent="updatedArticle" method="post">
              <div class="mb-3">
                <label for="category" class="form-label">Title</label>
                <input type="text" class="form-control" v-model="detail.title" id="title" placeholder="Title">
              </div>
              <div v-if="errors">
                <div class="alert alert-danger" role="alert">
                  {{errors['category'][0]}}
                </div>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Body</label>
                <!-- <textarea class="form-control body" v-model="body" id="description" rows="3"></textarea> -->
                <div class="quill-editor"
                    @change="onEditorChange($event)"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @ready="onEditorReady($event)"
                    v-quill:myQuillEditor="editorOption"
                    v-model="detail.body"
                >
                </div>
              </div>
              <div class="mb-3">
                <label for="category" class="form-label">Category</label>
                <select name="" id="" class="form-control" v-model="detail.category_id">
                  <option v-for="(categories, index) in category" :key="index" :value="categories.id">{{categories.category}}</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="category" class="form-label">Status</label>
                <select class="form-control" v-model="detail.status">
                  <option value="Publish">Publish</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>
              <div class="mb-3">
                <button type="submit" class="btn btn-outlines">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-md-5">
        <div class="card index-category">
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(articles, index) in article" :key="index" style="color:white">
                  <td>{{articles.id}}</td>
                  <td>{{articles.title}}</td>
                  <td>
                    <nuxt-link :to="'kategori/' + articles.id" class="btn btn-info">Edit</nuxt-link>
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
      article: {},
      category: {},
      detail: [],
      title:'',
      category_id:'',
      body: '',
      status: '',
      errors: null,

      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['link', 'image']
          ]
        }
      }
    }
  },

  mounted() {
    this.getArticle(),
    this.getCategori(),
    this.getArticleDetail()
  },

  methods: {
    async articlePost() {
      try {
        await this.$axios.post('article', {
          title: this.title,
          category_id: this.category_id,
          body: this.body,
          status: this.status
        })
        .then(() => {
         this.title = '',
         this.category_id = '',
         this.body = '',
         this.status = '',

        this.$router.push('artikel')
        this.getArticle()
        })

      } catch (e) {
        this.errors = e.response.data.errors
      }
    },

    getArticle() {
      this.$axios.get('article')
      .then(res => {
        this.article = res.data.data
      })
      .catch(e => {
        console.log(e.res.data)
      })
    },

    getCategori() {
      this.$axios.get('category')
      .then(res => {
        this.category = res.data.data
      })
      .catch(e => {
        console.log(e.res.data)
      })
    },

    getArticleDetail() {
      this.$axios.get(`article/${this.$route.params.slug}`)
      .then(res => {
        console.log(res.data.data)
        this.detail = res.data.data
      })
      .catch(e => {
        console.log(e.data.errors)
      })
    },

    async updatedArticle() {
      try {
        await this.$axios.put(`article/${this.$route.params.slug}`, {
          title: this.detail.title,
          category_id: this.detail.category_id,
          body: this.detail.body,
          status: this.detail.status
        })
        .then(() => {
          this.$router.push('/artikel')
        })

      } catch (e) {
        this.errors = e.response.data.errors
      }
    },

    onEditorBlur(editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      console.log('editor ready!', editor)
    },
    onEditorChange({ editor, html, text }) {
      console.log('editor change!', editor, html, text)
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
.body {
  min-height: 300px !important;
}

.quill-editor {
  min-height: 300px !important;
  max-height: 400px !important;
  overflow-y: auto;
  border: 2px solid !important;
  background-color: whitesmoke;
}
</style>