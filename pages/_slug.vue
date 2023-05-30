<template>
<client-only>
  <div class="containers">
    <div class="row">
      <div class="col-md-8 mt-3">
        <div class="card read">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <p class="font-monospace date">{{detail.created_at | moment}}</p>
              </div>
              <div>
                <i class="bi bi-bookmark-fill" style="color:white; font-size:1.2rem"></i>
              </div>
            </div>
            <h3 class="font-monospace" style="color:white">{{detail.title}}</h3>
            <hr>
            <p class="content" v-html="detail.body"></p>
          </div>
        </div>
        <more-card />
        <me-card />
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
import moment from 'moment'
import MoreCard from '../components/Me.vue'
import MeCard from '../components/MoreCard.vue'
export default {
  components: {
    MoreCard, MeCard
  },
  data() {
    return {
      detail: [],
      article:[],
      errors: null,
    }
  },

  filters: {
    moment: function (date) {
      return moment(date).format('D MMMM YYYY');
    }
  },

  mounted() {
    this.getDetailArticle(),
    this.getArticle()
  },

  methods: {
    getDetailArticle() {
      try {
        this.$axios.get(`show-articles/${this.$route.params.slug}`)
        .then(res => {
          this.detail = res.data.data.article
        })
      } catch (error) {
        this.errors = error.res.data.errors
      }
    },
    getArticle() {
      this.$axios.get('/articles')
      .then(res => {
        this.article = res.data.data.data
      })
      .catch(e => {
        return this.errors = e.res.data.errors
      })
    },
  }
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
