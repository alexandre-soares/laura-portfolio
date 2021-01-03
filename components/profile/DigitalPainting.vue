<template>
  <div>
    <CoolLightBox :items="items" :index="index" @close="index = null">
    </CoolLightBox>

    <div class="gallery">
      <figure
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        class="gallery__item"
        :class="'gallery__item--' + (imageIndex + 1)"
        @click="index = imageIndex"
      >
        <img :src="image" alt="img" class="gallery__img" />
      </figure>
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

<style lang="scss" scoped>
img {
  cursor: pointer;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(9, 20vw);
  grid-gap: 15px;
}

.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.gallery__item {
  &--1 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  &--2 {
    grid-column-start: 5;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  &--3 {
    grid-column-start: 1;
    grid-column-end: 8;
    grid-row-start: 3;
    grid-row-end: 6;

    & img {
      // object-fit: contain !important;
    }
  }

  &--4 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 8;
  }

  &--5 {
    grid-column-start: 5;
    grid-column-end: 8;
    grid-row-start: 6;
    grid-row-end: 8;
  }

  &--6 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 8;
    grid-row-end: 10;
  }

  &--7 {
    grid-column-start: 5;
    grid-column-end: 8;
    grid-row-start: 8;
    grid-row-end: 10;
  }
}
</style>
