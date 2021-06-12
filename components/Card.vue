<template>
  <div>
    <div class="col mb-4">
      <div class="card welcome">
        <div class="card-body">
          <p class="font-monospace text-white text-center" style="font-size:30px">Welcome, to my story !!</p>
          <p class="font-monospace">Cuma nulis kalau lagi mood aja, selain itu sih paling cuma iseng, tapi kadang isi nya lebih serius ! </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <nuxt-link to="/read" class="link">
          <div class="card mb-3 article">
            <div class=" g-0">
              <div class="col-md-12">
                <div class="card-body">
                  <h5 class="font-monospace title">Susahnya jadi programmer, salahnya bukan cuma dimata perempuan aja !</h5>
                  <p class="card-text mt-3 title"><small class="text-muted font-monospace">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="col-md-6">
        <nuxt-link to="/read" class="link">
          <div class="card mb-3 article">
            <div class=" g-0">
              <div class="col-md-12">
                <div class="card-body">
                  <h5 class="font-monospace title">Seorang Software Engginer harus kuat mental !</h5>
                  <p class="card-text mt-3 title"><small class="text-muted font-monospace">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="col-md-6">
        <div class="card mb-3 article">
          <div class=" g-0">
            <div class="col-md-12">
              <div class="card-body">
                <h5 class="font-monospace title">Ternyata jadi bisa itu gak susah-susah amat kok</h5>
                <p class="card-text mt-3 title"><small class="text-muted font-monospace">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-3 article">
          <div class=" g-0">
            <div class="col-md-12">
              <div class="card-body">
                <h5 class="font-monospace title">Salut sama kalian yang ngoding pakai VIM (nyusain hidup aja)</h5>
                <p class="card-text mt-3 title"><small class="text-muted font-monospace">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-3 article">
          <div class=" g-0">
            <div class="col-md-12">
              <div class="card-body">
                <h5 class="font-monospace title">Era Digital 4.0 ternyata cuma 'TAG LINE' doang !</h5>
                <p class="card-text mt-3 title"><small class="text-muted font-monospace">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-3 article">
          <div class=" g-0">
            <div class="col-md-12">
              <div class="card-body">
                <h5 class="font-monospace title">Alasan kenapa mayoritas programmer itu suka menyendiri</h5>
                <p class="card-text mt-3 title"><small class="text-muted font-monospace">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.welcome {
  background-color: #e1e099;
  border: 2px solid;
  box-shadow: 15px 12px 0px -1px #4b5d67 ;
  min-height: 140px;
}
.article {
  min-height: 110px;
  max-height: 110px;
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