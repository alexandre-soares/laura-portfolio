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
        require('~/static/img/profile/digital-painting/alpha-wann.svg'),
        require('~/static/img/profile/digital-painting/lady in red.svg'),
        require('~/static/img/profile/digital-painting/jordan.svg'),
        require('~/static/img/profile/digital-painting/black and white.svg'),
        require('~/static/img/profile/digital-painting/loic.svg'),
        require('~/static/img/profile/digital-painting/rida.svg'),
        require('~/static/img/profile/digital-painting/gift.svg'),
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
