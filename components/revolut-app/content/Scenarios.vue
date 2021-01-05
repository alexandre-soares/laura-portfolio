<template>
  <div class="container">
    <div class="scenarios">
      <div class="scenario">
        <span class="scenario__title">Scenario 1</span>
        <p class="paragraph">
          - For a friend’s birthday, someone you don’t know buys a common gift.
          He has a Revolut account, but does not wish to share his phone number.
          He only provides his identifier starting with "@" to receive an
          instant transfer.
          <strong>Where do you go to send the money to him?</strong>
        </p>
      </div>
      <div class="scenario">
        <span class="scenario__title">Scenario 2</span>
        <p class="paragraph">
          - You plan to go to Hong Kong next month. So you want to create an HDK
          account and add money to it.
          <strong>How do you do it?</strong>
        </p>
      </div>
      <div class="scenario">
        <span class="scenario__title">Scenario 3</span>
        <p class="paragraph">
          <strong>- Consult the expenses made during the previous month</strong>
        </p>
      </div>
      <div class="scenario">
        <span class="scenario__title">Scenario 4</span>
        <p class="paragraph">
          - By consulting your expenses, you notice an irregularity and decide
          to contact customer service.
          <strong
            >So find out where to contact customer service and send a message in
            the chat.</strong
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
html.light .scenarios {
  border-color: $dark-blue;
}

.scenarios {
  margin: 5rem 0;
  border: 1px solid $light-white;
  padding: 3rem;
  font-size: 1.6rem;
}

.scenario {
  &__title {
    color: $light-pink;
    font-size: 1.9rem;
    font-weight: 500;
    letter-spacing: 1px;
  }
}
</style>
