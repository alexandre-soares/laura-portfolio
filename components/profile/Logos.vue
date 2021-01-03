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
        require('../../static/img/profile/logos/1desolination.jpg'),
        require('../../static/img/profile/logos/2entrenew.jpg'),
        require('../../static/img/profile/logos/3maesha.jpg'),
        require('../../static/img/profile/logos/4foodimp.jpg'),
        require('../../static/img/profile/logos/5logo.jpg'),
        require('../../static/img/profile/logos/6stardust.jpg'),
        require('../../static/img/profile/logos/7sun2chem.jpg'),
        require('../../static/img/profile/logos/8ot4l.jpg'),
        require('../../static/img/profile/logos/9trac.jpg'),
        require('../../static/img/profile/logos/10tvc.jpg'),
        require('../../static/img/profile/logos/11mof4air.jpg'),
        require('../../static/img/profile/logos/12bioreg.jpg'),
        require('../../static/img/profile/logos/13methasol.jpg'),
        require('../../static/img/profile/logos/14maesha.jpg'),
        require('../../static/img/profile/logos/15nautilos.jpg'),
        require('../../static/img/profile/logos/16map4.jpg'),
        require('../../static/img/profile/logos/17foodimp.jpg'),
        require('../../static/img/profile/logos/18foreach.jpg'),
        require('../../static/img/profile/logos/19hope2.jpg'),
        require('../../static/img/profile/logos/20pv2fuel.jpg'),
        require('../../static/img/profile/logos/21reliable.jpg'),
        require('../../static/img/profile/logos/22osiris.jpg'),
        require('../../static/img/profile/logos/23sun2h2.jpg'),
        require('../../static/img/profile/logos/24logo.jpg'),
        require('../../static/img/profile/logos/25gift.jpg'),
        require('../../static/img/profile/logos/26logo.jpg'),
        require('../../static/img/profile/logos/27lex4bio.jpg'),
        require('../../static/img/profile/logos/28netpoulsafe.jpg'),
        require('../../static/img/profile/logos/29stir.jpg'),
        require('../../static/img/profile/logos/30ecnexus.jpg'),
        require('../../static/img/profile/logos/31directcarb.jpg'),
        require('../../static/img/profile/logos/32logo.jpg'),
        require('../../static/img/profile/logos/33interpreter.jpg'),
        require('../../static/img/profile/logos/34letssteam.jpg'),
        require('../../static/img/profile/logos/35minagris.jpg'),
        require('../../static/img/profile/logos/36perspicace.jpg'),
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
