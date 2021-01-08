<template>
  <div class="container">
    <div class="page-content">
      <h3 class="page-content__title">Personas</h3>

      <div class="row persona align-items-start">
        <div class="persona__profile col-sm-12 col-lg-8">
          <table class="desktop-version">
            <tbody>
              <tr>
                <td>
                  <h4 class="persona__h4">Meet Anais</h4>
                  <img
                    src="@/static/img/louboutin-app/persona.jpg"
                    alt="persona"
                  />
                </td>
                <td>
                  <h4 class="persona__h4">Behavior</h4>
                  <ul class="persona__profile__list">
                    <li>Makes a lot of online shopping</li>
                    <li>Works in a fancy area</li>
                    <li>Collects expensive shoes</li>
                    <li>Often goes to parties</li>
                    <li>Follow every fashion week</li>
                    <li>Tries to optimise her time</li>
                    <li>Loves to be attractive</li>
                    <li>She works hard to make good money</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <h4 class="persona__h4">Demographics</h4>
                  <ul class="persona__profile__list">
                    <li><strong>Age:</strong> 31</li>
                    <li><strong>Location:</strong> Lyon, France</li>
                    <li><strong>Occupation:</strong> Lawyer</li>
                  </ul>
                </td>
                <td>
                  <h4 class="persona__h4">Needs & Goals</h4>
                  <ul class="persona__profile__list">
                    <li>Wants to shop online easily</li>
                    <li>Wants to make things fast</li>
                    <li>Wants to organise her things</li>
                    <li>Wants to be elegant & sexy</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="mobile-version">
            <h4 class="persona__h4">Meet Anais</h4>
            <img src="@/static/img/louboutin-app/persona.jpg" alt="persona" />
            <h4 class="persona__h4">Behavior</h4>
            <ul class="persona__profile__list">
              <li>Makes a lot of online shopping</li>
              <li>Works in a fancy area</li>
              <li>Collects expensive shoes</li>
              <li>Often goes to parties</li>
              <li>Follow every fashion week</li>
              <li>Tries to optimise her time</li>
              <li>Loves to be attractive</li>
              <li>She works hard to make good money</li>
            </ul>

            <h4 class="persona__h4">Demographics</h4>
            <ul class="persona__profile__list">
              <li><strong>Age:</strong> 31</li>
              <li><strong>Location:</strong> Lyon, France</li>
              <li><strong>Occupation:</strong> Lawyer</li>
            </ul>

            <h4 class="persona__h4">Needs & Goals</h4>
            <ul class="persona__profile__list">
              <li>Wants to shop online easily</li>
              <li>Wants to make things fast</li>
              <li>Wants to organise her things</li>
              <li>Wants to be elegant & sexy</li>
            </ul>
          </div>
        </div>
        <div class="persona__pros-cons col-sm-12 col-lg-4">
          <p class="paragraph">
            First I made research around Louboutin’s customer-base. I then
            created a couple of provisional personas to cover the asumpted,
            largest group of customers: professionals in their 30s and 40s and
            in the middle-upper income bracket.
          </p>
          <p class="paragraph">
            Here is Anais, 31 years old lawyer in Lyon. She loves Louboutin
            shoes but she has to purchase online because there is no shop or
            resellers for this brand in Lyon. She has no time to waste and
            shopping is a synonym of pleasure & luxury for her. She doesn’t
            really care about the price, but every purchase must be an
            experience.
          </p>
          <p class="paragraph">
            Her leitmotiv in life is « Work hard, play hard »
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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

    @media only screen and (max-width: $bp-small) {
      text-align: center;
    }
  }
}

.persona {
  margin: 10rem 0;
  font-size: 1.7rem;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: $bp-small) {
    margin: 3rem 0;
  }

  &__profile {
    padding-left: 0;
    & img {
      width: 65%;
      margin: 0 auto;
      display: block;

      @media only screen and (max-width: $bp-small) {
        width: 45%;
      }
    }

    &__list li {
      margin: 1rem;
    }

    table td {
      border: 2px solid #f11b18;
    }

    .mobile-version {
      border: 1px solid #f11b18;
      margin: 2rem auto;

      display: none;

      @media only screen and (max-width: $bp-small) {
        display: block;
      }
    }

    table.desktop-version {
      border-collapse: collapse;
      margin: 0 auto;

      @media only screen and (max-width: $bp-small) {
        display: none;
      }
    }
  }

  & h4 {
    color: #f11b18;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin: 2rem 0;
  }

  &__pros-cons {
    padding-right: 0;
    & small {
      margin: 2rem 0;
      font-size: 1.5rem;
      text-transform: uppercase;
      display: block;
      letter-spacing: 1px;
    }
  }

  &__list {
    list-style-type: none;
    margin: 4rem 0;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem 0;

    & img {
      margin-right: 1rem;
    }
  }
}
</style>
