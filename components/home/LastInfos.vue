<template>
  <div class="home__infos container">
    <h4>OK, NOW WHO I AM FOR REAL</h4>
    <div class="row">
      <div class="col-sm-12 col-lg">
        <ul>
          <li>☠️ Plant killer</li>
          <li>🍜 Experimental cooker</li>
          <li>⏱️ Always-on-time freak</li>
          <li>👩🏻‍💻 Apple user</li>
        </ul>
      </div>
      <div class="col-sm-12 col-lg">
        <ul>
          <li>🦑 Weird food enthusiast</li>
          <li>👗 Fashion lover</li>
          <li>🖌️ Wannabe artist</li>
          <li>✈️ World traveler</li>
        </ul>
      </div>
      <div class="col-sm-12 col-lg">
        <ul>
          <li>💸 Natural skin care addict</li>
          <li>⛷️ Between-the-trees skier</li>
          <li>🍰 Tiramisu master</li>
          <li>👺 Devil-hides-in-details priestess</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home {
  &__infos {
    padding-bottom: 5rem;

    @media only screen and (max-width: $bp-small) {
      text-align: center;
    }

    & h4 {
      font-family: 'Baskerville', sans-serif;
      font-size: 1.8rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-weight: lighter;
      margin-bottom: 3rem;
    }
    & ul {
      list-style-type: none;

      @media only screen and (max-width: $bp-small) {
        text-align: left;
        display: block;
        margin: 0 auto;
      }
    }
  }
}
</style>
