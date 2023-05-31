<template>
  <div class="card author mt-3">
    <div class="card-body d-flex justify-content-start">
      <img src="https://andridesmana.vercel.app/images/me.jpeg" class="avatar">
      <div class="bio">
        <span class="font-monospace"><a href="https://andridesmana.vercel.app/" target="_blank" class="other-link">Andri Desmana</a></span><br>
        <p class="small"><em>Hidup gak selamanya diatas, juga gak selamanya dibawah.</em></p>
        <p class="font-monospace">
          <a href="https://andridesmana.vercel.app" target="_blank"><i class="bi bi-globe" style="color:grey; font-size:1.2rem"></i></a>
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
</template>
<style>
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
