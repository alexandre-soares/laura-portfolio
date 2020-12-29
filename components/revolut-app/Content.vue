<template>
  <div>
    <Persons />

    <Job-stories />

    <Guerilla />

    <Scenarios />

    <Pain-points />

    <Solutions />

    <Tests />

    <Final-result />

    <Prototype />
  </div>
</template>

<script>
import FinalResult from './content/FinalResult.vue'
import Guerilla from './content/Guerilla.vue'
import JobStories from './content/JobStories.vue'
import PainPoints from './content/PainPoints.vue'
import Persons from './content/Persons.vue'
import Scenarios from './content/Scenarios.vue'
import Solutions from './content/Solutions.vue'
import Tests from './content/Tests.vue'
import Prototype from './content/Prototype.vue'
export default {
  components: {
    Persons,
    JobStories,
    Guerilla,
    Scenarios,
    PainPoints,
    Solutions,
    Tests,
    FinalResult,
    Prototype,
  },
}
</script>

<style lang="scss">
.page-content {
  &__title {
    font-family: 'Baskerville', sans-serif;
    font-size: 2.4rem;
    letter-spacing: 1px;
    text-align: left;
    margin: 4rem 0;
    align-self: start;
    text-transform: uppercase;
    font-weight: 400;
  }
}

.img {
  width: 75%;
  margin: 5rem auto;
  display: block;
}
</style>
