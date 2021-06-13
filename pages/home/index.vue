<template>
  <div class="container">
    <div class="row">
      <!-- <div class="col-md-3">
        <div class="card menu">
          <div class="card-body">

          </div>
        </div>
      </div> -->
      <div class="col-md-12">
        <div class="card contents">
          <div class="card-body">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth'
}
</script>
<style>
.menu {
  margin-top: 15px;
  box-shadow: 15px 12px 0px -1px #4b5d67 ;
  background-color: #404b69;
  min-height: 450px;
}
.contents {
  margin-top: 15px;
  box-shadow: 15px 12px 0px -1px #4b5d67 ;
  background-color: #404b69;
  min-height: 450px;
}
</style>