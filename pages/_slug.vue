<template>
<client-only>
  <div class="containers">
    <div class="row">
      <div class="col-md-8 mt-3">
        <!-- <div v-if="errors == 200">
          <img src="~/assets/image/no_result.svg" class="images" /> <br>
          <p class="text-center">Not Result ...</p>
        </div> -->
        <!-- <div v-else> -->
          <div class="card read">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="font-monospace date">12 Juni 2021</p>
                </div>
                <div>
                  <i class="bi bi-bookmark-fill" style="color:white; font-size:1.2rem"></i>
                </div>
              </div>
              <h3 class="font-monospace" style="color:white">{{detail.title}}</h3>
              <hr>
              <p class="content" v-html="detail.body"></p>
              <div class="d-flex justify-content-between">
                <div>
                  <button class="btn btn-outline shadow">Story</button>
                  <button class="btn btn-outline shadow">Netizen</button>
                </div>
            </div>
            </div>
          </div>
          <div class="card author mt-3">
          <div class="card-body d-flex justify-content-start">
            <img src="https://andridesmana.pw/images/me.png" class="avatar">
            <div class="bio">
              <span class="font-monospace"><a href="https://andridesmana.pw/" target="_blank" class="other-link">Andri Desmana</a></span><br>
              <p class="small"><em>Hidup gak selamanya diatas, juga gak selamanya dibawah.</em></p>
              <p class="font-monospace">
                <a href="https://www.linkedin.com/in/andri-desmana" target="_blank"><i class="bi bi-linkedin" style="color:grey; font-size:1.2rem"></i></a>
                <a href="https://www.facebook.com/andridesmana/" target="_blank"><i class="bi bi-facebook" style="color:grey; font-size:1.2rem"></i></a>
                <a href="https://www.instagram.com/andridesmana/" target="_blank"><i class="bi bi-instagram" style="color:grey; font-size:1.2rem"></i></a>
                <a href="https://github.com/andes2912" target="_blank"><i class="bi bi-github" style="color:grey; font-size:1.2rem"></i></a>
                <a href="https://twitter.com/andri_desmana" target="_blank"><i class="bi bi-twitter" style="color:grey; font-size:1.2rem"></i></a>
                <a href="https://t.me/andridesmana" target="_blank"><i class="bi bi-telegram" style="color:grey; font-size:1.2rem"></i></a>
              </p>
              <p><a href="https://saweria.co/andes2912" target="_blank" class="coffe">Give me a Coffe <i class="bi bi-cup-fill" style="font-size:1.3rem"></i></a> </p>
            </div>
          </div>
          </div>
        <!-- </div> -->
      </div>

      <div class="col-md-4 mt-3">
        <div class="card read">
          <div class="card-body">
            <h4 class="font-monospace" style="color:black"><u>Other Link</u></h4>
            <p class="other" v-for="(articles ,index) in article" :key="index"><nuxt-link :to=" articles.slug " class="other-link">{{articles.title}}</nuxt-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</client-only>
</template>
<script>
export default {
  data() {
    return {
      detail: [],
      article:[],
      errors: []
    }
  },

  mounted() {
    this.getDetailArticle(),
    this.getArticle()
  },

  methods: {
    getDetailArticle() {
      try {
        this.$axios.get(`articles/${this.$route.params.slug}`)
        .then(res => {
          this.detail = res.data.data
        })
      } catch (error) {
        this.errors = error.res.data.errors
        console.log(error.res.data.errors)
      }
    },
    getArticle() {
      this.$axios.get('/articles')
      .then(res => {
        this.article = res.data.data
      })
      .catch(e => {
        this.errors = e.res.data.errors
      })
    }
  },
}
</script>
<style>
.read {
  box-shadow: 15px 12px 0px -1px #4b5d67 ;
  background-color: #404b69;
}
hr {
  border: 2px solid white;
}
.date {
  margin-bottom: 15px;
  font-size: small;
  color: #dbd8e3;
}
.content {
  font-family: 'IBM Plex Mono', monospace;
  color: #dbd8e3;
}
.btn-outline {
  box-shadow: white;
  color: #4b5d67;
  background-color: #ffffff;
  border-color: #4b5d67;
  letter-spacing: 0.05em;
  pointer-events: none;
}
.btn-outline:hover {
  color: white;
}
.other {
  font-family: 'IBM Plex Mono', monospace;
  color: rgb(248, 244, 11);
}
.other-link {
  text-decoration: none;
  color: rgb(248, 244, 11);
}
.other-link:hover {
  color: white;
}

.author {
  box-shadow: 15px 12px 0px -1px #404b69 ;
  background-color: #4b5d67;
  min-height: 100px;
}
.avatar {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
.bio {
  margin-left: 10px;
  color: #acdbdf;
}
.small {
  margin-top:-3px;
  font-size: small;
  font-family: 'IBM Plex Mono', monospace;
}
.coffe {
  text-decoration: none;
  color: rgb(248, 244, 11);
}
.coffe:hover {
  color: #404b69;
}
p.content img {
  max-width: 100%;
  height: auto;
}
.images {
  max-width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>