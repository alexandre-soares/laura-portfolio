<template>
  <div class="container">
    <h3 class="portfolio-h3">Personas</h3>

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
                  <li>Follows every Fashion Week</li>
                  <li>Tries to optimise her time</li>
                  <li>Loves to be attractive</li>
                  <li>Works hard to make good money</li>
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
            <li>Follows every Fashion Week</li>
            <li>Tries to optimise her time</li>
            <li>Loves to be attractive</li>
            <li>Works hard to make good money</li>
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
          First I made research around Louboutin’s customer-base. I then created
          a couple of provisional personas to cover the assumpted, largest group
          of customers: professionals in their 30s and 40s and in the
          middle-upper income bracket.
        </p>
        <p class="paragraph">
          Here is Anais, 31 years old lawyer in Lyon. She loves Louboutin shoes
          but she has to purchase online because there is no shop or resellers
          for this brand in Lyon. She has no time to waste and shopping is a
          synonym of pleasure & luxury for her. She doesn’t really care about
          the price, but every purchase must be an experience.
        </p>
        <p class="paragraph">
          Her leitmotiv in life is « Work hard, play hard »
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.persona {
  margin: 10rem 0;
  font-size: 1.7rem;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: $bp-small) {
    margin: 3rem 0;
  }

  &__profile {
    & img {
      width: 85%;
      margin: 0 auto;
      display: block;

      @media only screen and (max-width: $bp-small) {
        width: 65%;
      }
    }

    &__list li {
      margin: 1rem;
    }

    .mobile-version {
      border: 1px solid #f11b18;
      margin: 2rem auto;

      display: none;

      @media only screen and (max-width: $bp-small) {
        display: block;
        margin: 2rem auto;
      }
    }

    table.desktop-version {
      border-collapse: collapse;
      margin: 0 auto;

      @media only screen and (max-width: $bp-small) {
        display: none;
      }
    }

    table tr {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: stretch;
      width: 65rem;
    }

    table td {
      padding: 1rem;
      border: 2px solid #f11b18;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: stretch;
      width: 65rem;
    }
    table tr:first-child td {
      border-top: 0;
    }
    table tr td:first-child {
      border-left: 0;
    }
    table tr:last-child td {
      border-bottom: 0;
    }
    table tr td:last-child {
      border-right: 0;
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
    margin: 1rem 0;
  }
}
</style>
