<template>
  <div class="container">
    <div class="col mb-4">
      <div class="card welcome">
        <div class="card-body">
          <p class="font-monospace text-white text-center" style="font-size:30px">Welcome, to my story !!</p>
          <p class="font-monospace">Cuma nulis kalau lagi mood aja, selain itu sih paling cuma iseng, tapi kadang isi nya lebih serius ! </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6" v-for="(articles, index) in article" :key="index">
        <nuxt-link :to="articles.slug" class="link">
          <div class="card mb-3 article">
            <div class=" g-0">
              <div class="col-md-12">
                <div class="card-body">
                  <h5 class="font-monospace title">{{articles.title}}</h5>
                  <p class="card-text mt-3 title"><small class="text-muted font-monospace">{{articles.created_at | moment}}</small></p>
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  data() {
    return {
      article: {}
    }
  },

  filters: {
    moment: function (date) {
      return moment(date).format('D MMMM YYYY');
    }
  },

  mounted() {
    this.getArticle()
  },

  methods: {
    async getArticle() {
      this.$axios.get('/articles')
      .then(res => {
        this.article = res.data.data
        console.log(res.data.data)
      })
      .catch(e => {
        console.log(e.data.errors);
      })
    }
  },
}
</script>
<style>
.welcome {
  background-color: #e1e099;
  border: 2px solid;
  box-shadow: 15px 12px 0px -1px #4b5d67 ;
  min-height: 140px;
}
.article {
  min-height: 133px;
  max-height: 133px;
  border: 3px solid;
  padding: 10px;
  box-shadow: 15px 12px 0px -1px #4b5d67 ;
  background-color: rgb(250, 108, 108);
  margin-top: 5px;
}
.title {
  margin-top: -15px;
  margin-left: -13px;
}
.link {
  text-decoration: none;
  color: black;
}
.link:hover {
  color: #4b5d67;
}
</style>