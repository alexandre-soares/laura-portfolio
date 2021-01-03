<template>
  <div>
    <CoolLightBox :items="items" :index="index" @close="index = null">
    </CoolLightBox>

    <div class="row">
      <img
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        class="img col-3"
        :src="image"
        @click="index = imageIndex"
      />
    </div>
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
  components: {
    CoolLightBox,
  },
  data() {
    return {
      items: [
        require('~/static/img/profile/art/okami.svg'),
        require('~/static/img/profile/art/tori.svg'),
        require('~/static/img/profile/art/goku.svg'),
        require('~/static/img/profile/art/shopping.svg'),
        require('~/static/img/profile/art/totoro.svg'),
        require('~/static/img/profile/art/kabuki.svg'),
      ],
      index: null,
    }
  },
}
</script>

<style scoped>
img {
  cursor: pointer;
}
</style>
