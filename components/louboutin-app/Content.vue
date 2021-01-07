<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="paragraph">
            Louboutin is one of my favorite shoe brands, but I run into problems
            every time I use go the website on my phone. Although I am not
            affiliated with the red sole brand, I wanted to figure out if other
            users were having similar issues. I decided to conduct usability
            tests, which led me to discover some pain points and redesign part
            of the experience.
          </p>
        </div>
      </div>
    </div>

    <Personas />

    <JobStories />

    <Brand-values />

    <Problems />

    <Solutions />

    <Graphic-charter />

    <Pain-points />

    <Prototype />
  </div>
</template>

<script>
import Personas from './content/Personas.vue'
import JobStories from './content/JobStories.vue'
import BrandValues from './content/BrandValues.vue'
import Problems from './content/Problems.vue'
import Solutions from './content/Solutions.vue'
import GraphicCharter from './content/GraphicCharter.vue'
import PainPoints from './content/PainPoints.vue'
import Prototype from './content/Prototype.vue'
export default {
  components: {
    Personas,
    JobStories,
    BrandValues,
    Problems,
    Solutions,
    GraphicCharter,
    PainPoints,
    Prototype,
  },
}
</script>

<style></style>
