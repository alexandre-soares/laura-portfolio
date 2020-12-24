<template>
  <div class="toggle-container">
    <span>Light Mode</span>
    <input id="light" type="checkbox" class="toggle" />
    <label for="light" class="label" @click="toggleMode">
      <div class="ball"></div>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    }
  },
  methods: {
    toggleMode() {
      this.darkMode = !this.darkMode
      const html = document.querySelector('html')
      html.classList.toggle('light')
    },
  },
}
</script>

<style lang="scss" scoped>
.toggle-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
}

.toggle {
  visibility: hidden;
}

.label {
  width: 4rem;
  height: 2rem;
  background-color: #d0d0d0;
  border-radius: 5rem;
  cursor: pointer;
  display: inline-block;
  margin: 0 1.5rem 0;
  position: relative;
}

.toggle:checked + .label {
  background-color: $light-pink;
}

.ball {
  background: white;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  align-items: center;
  justify-content: center;
  animation: slideOff 0.3s linear forwards;
}

.toggle:checked + .label .ball {
  animation: slideOn 0.3s linear forwards;
}

@keyframes slideOn {
  0% {
    transform: translateX(0) scale(1);
  }

  50% {
    transform: translateX(1rem) scale(1.2);
  }

  100% {
    transform: translateX(2rem) scale(1);
  }
}

@keyframes slideOff {
  0% {
    transform: translateX(2rem) scale(1);
  }

  50% {
    transform: translateX(1rem) scale(1.2);
  }

  100% {
    transform: translateX(0) scale(1);
  }
}
</style>
