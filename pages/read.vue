<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mt-3">
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
            <h3 class="font-monospace" style="color:white">Susahnya jadi programmer, salahnya bukan cuma dimata perempuan aja !</h3>
            <hr>
            <p class="content">
              Seorang pria baru-baru ini menuai sorotan publik usai menceritakan terpaksa melepaskan kekasihnya. Sebab, ia tak bisa memenuhi mahar pernikahan yang diminta calon mertua sebesar Rp100 juta. <br><br>

              Sebelumnya diketahui, ketika ingin menikah, biasanya sang pria akan melamar kekasihnya terlebih dahulu dengan memberikan mahar. Adapun dalam Islam, maskawin sebaiknya tidak menjadi beban bagi pria, tapi tak juga sampai merendahkan sang perempuan.
              Namun, mahar lamaran juga terkadang bisa jadi sebab seseorang batal menikah. Seperti misalnya yang dialami pemuda asal Malaysia ini. Kisahnya dibagikan sendiri olehnya lewat akun @mr_syahriman di TikTok, pada 20 Mei 2021. <br><br>

              Dalam video berdurasi kurang dari semenit tersebut, pria asal Malaysia bernama Ahmad Syahriman mengaku terpaksa membatalkan lamaran. Penyebabnya, ia tak sanggup memenuhi maskawin yang diminta calon mertua. <br>
              “Ibumu minta mas kawin 30.000 ringgit, tapi aku hanyalah seorang kuli,” kata Syahrian dalam keterangan videonya.
              Bagi Syahrian, maskawin sebesar 30 ribu ringgit atau setara Rp103,7 juta terlalu berat untuknya. Ia juga mengaku tak mau sampai membebani orang tua dengan mahar tersebut, terutama ibunya. <br> <br>
              Sementara dalam video, diperlihatkan keseharian Syahriman sebagai petugas pemeriksa kesehatan. Tampak ia tengah berpatroli untuk memeriksa kelengkapan beberapa toko terkait protokol kesehatan. <br><br>
              Lantas unggahan tersebut pun viral, ditonton hingga lebih dari 2,2 juta kali dan disukai oleh lebih dari 180 ribu orang. Beragam komentar diberikan warganet, kebanyakan yang merasa kesal dengan mertuanya.
              “Mertua mental dagang,” kata akun @syakur451.
              “Abang sama adek ajalah udah. Mahar Bismillah kita bangun rumah tangga di jalan Allah,” sebut akun @pukiscoklat16.
              “Semoga dipertemukan jodoh yang terbaik di sepertiga malam, ya, bang. Amin,” ujar akun @hay_sekar. (bob)
            </p>
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
              <span class="font-monospace">Andri Desmana</span><br>
              <p class="small"><em>Hidup gak selamanya diatas, juga gak selamanya dibawah.</em></p>
              <p><a href="https://saweria.co/andes2912" target="_blank" class="coffe">Give me a Coffe <i class="bi bi-cup-fill" style="font-size:1.3rem"></i></a> </p>
            </div>
          </div>
        </div>
      </div>

       <div class="col-md-4 mt-3">
        <div class="card read">
          <div class="card-body">
            <h4 class="font-monospace" style="color:black"><u>Other Link</u></h4>
            <p class="other"><nuxt-link to="/" class="other-link">Alasan kenapa mayoritas programmer itu suka menyendiri</nuxt-link></p>
            <p class="other"><nuxt-link to="/" class="other-link">Salut sama kalian yang ngoding pakai VIM (nyusain hidup aja)</nuxt-link></p>
            <p class="other"><nuxt-link to="/" class="other-link">Ternyata jadi bisa itu gak susah-susah amat kok</nuxt-link></p>
            <p class="other"><nuxt-link to="/" class="other-link">Seorang Software Engginer harus kuat mental !</nuxt-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
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
</style>