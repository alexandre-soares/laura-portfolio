<template>
  <div class="infos container">
    <h4>If you wish to know me on a personal level</h4>
    <div class="row">
      <div class="col-sm-12 col-lg">
        <ul>
          <li>☠️ Plant killer</li>
          <li>🍜 Experimental cook</li>
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
          <li>👺 Devil-hides-in-details spotter</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.infos {
  padding-top: 4rem;
  padding-bottom: 4rem;

  @media only screen and (max-width: $bp-small) {
    text-align: center;
  }

  & h4 {
    margin-top: 3rem !important;
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
</style>
