<template>
  <div class="container-fluid">
    <div class="bottom-row">
      <nuxt-link tag="a" class="bottom-row__item" :to="previous">
        <i class="fas fa-chevron-left"></i> {{ previousText }}
      </nuxt-link>
      <nuxt-link
        tag="a"
        class="bottom-row__item"
        :to="{ path: '/', hash: '#ux-design' }"
        ><i class="fas fa-redo"></i>All works</nuxt-link
      >
      <nuxt-link tag="a" class="bottom-row__item" :to="next">
        {{ nextText }}<i class="fas fa-chevron-right"></i
      ></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    previous: {
      type: String,
      default: undefined,
    },
    next: {
      type: String,
      default: undefined,
    },
    previousText: {
      type: String,
      default: undefined,
    },
    nextText: {
      type: String,
      default: undefined,
    },
  },
}
</script>

<style lang="scss" scoped>
html.light {
  & .bottom-row {
    color: #121212 !important;
  }
}

.bottom-row {
  font-size: 1.4rem;
  padding: 2rem 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .fas {
    color: #ef487d;
  }

  &__item {
    cursor: pointer;
    text-decoration: none;
    color: #f2f2f2;
    transition: 0.2s ease-in;

    &:hover {
      color: rgb(95, 95, 95);
    }

    & i {
      margin: 0 1.5rem;
    }

    &:nth-child(2) i {
      margin: 0 1.5rem 0 0 !important;
    }
  }
}
</style>
