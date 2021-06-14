<template>
  <div class="containers">
    <client-only>
      <Card />
    </client-only>
  </div>
</template>

<script>
import Card from '~/components/Card'

export default {
  components: {
    Card
  }
}
</script>