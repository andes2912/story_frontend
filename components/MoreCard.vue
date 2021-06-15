<template>
  <div>
    <div class="row">
      <div class="col-md-12 col-lg-6 mt-3" v-for="(articles, index) in article" :key="index">
        <nuxt-link :to="articles.slug" class="link">
          <div class="card mb-3 article-more">
            <div class=" g-0">
              <div class="col-md-12">
                <div class="card-body">
                  <h6 class="font-monospace title">{{articles.title}}</h6>
                  <p class="card-text mt-3 title"><small class="text-muted font-monospace">Last updated 3 mins ago</small></p>
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
export default {
  data() {
    return {
      article: {}
    }
  },

  mounted() {
    this.getArticle()
  },

  methods: {
    async getArticle() {
      this.$axios.get(`articles/${this.$route.params.slug}`)
      .then(res => {
        this.article = res.data.more
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
.article-more {
  min-height: 100px;
  max-height: 100px;
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