<template>
  <div class="container">
    <div class="page-content">
      <h3 class="portfolio-h3">Persons</h3>
      <p class="paragraph">
        To start, I interviewed real Revolut users, finding the personas to be
        often biased: they are a mixture of assumptions and presumptions
        filtered by our own interpretation.
      </p>
      <p class="paragraph">
        I interviewed 8 people with different user profiles: they almost all
        live from different countries, some travel a lot, others not. All shared
        their experience with the current app, the reason why they had chosen
        this neo-bank, their favourite functionalities as well as those
        perceived as useless.
      </p>

      <div class="row persona align-items-start">
        <div class="persona__profile col-sm-12 col-lg-8">
          <table class="desktop-version">
            <tbody>
              <tr>
                <td>
                  <h4 class="persona__h4">User Profile : Alex</h4>
                  <img
                    src="@/static/img/revolut-app/persona.png"
                    alt="persona"
                  />
                </td>
                <td>
                  <h4 class="persona__h4">Behavior</h4>
                  <ul class="persona__profile__list">
                    <li>Mainly works from home</li>
                    <li>Manages his finances from his phone</li>
                    <li>Is in charge of domestic spendings</li>
                    <li>Is interested in trading</li>
                    <li>Saves money for holidays</li>
                    <li>Lives in Bulgaria with a French bank account</li>
                    <li>Loves to travel the world</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <h4 class="persona__h4">Demographics</h4>
                  <ul class="persona__profile__list">
                    <li><strong>Age:</strong> 24</li>
                    <li><strong>Location:</strong> Sofia, Bulgaria</li>
                    <li><strong>Occupation:</strong> Web Developer</li>
                  </ul>
                </td>
                <td>
                  <h4 class="persona__h4">Needs & Goals</h4>
                  <ul class="persona__profile__list">
                    <li>Wants to change Euro in Lev quickly and for free</li>
                    <li>Wants to start trading</li>
                    <li>Wants to manage his online bank account easily</li>
                    <li>Wants to spare money</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="mobile-version">
            <h4 class="persona__h4">User Profile : Alex</h4>
            <img src="@/static/img/revolut-app/persona.png" alt="persona" />
            <h4 class="persona__h4">Behavior</h4>
            <ul class="persona__profile__list">
              <li>Mainly works from home</li>
              <li>Manages his finances from his phone</li>
              <li>Is in charge of domestic spendings</li>
              <li>Is interested in trading</li>
              <li>Saves money for holidays</li>
              <li>Lives in Bulgaria with a French bank account</li>
              <li>Loves to travel the world</li>
            </ul>

            <h4 class="persona__h4">Demographics</h4>
            <ul class="persona__profile__list">
              <li><strong>Age:</strong> 24</li>
              <li><strong>Location:</strong> Sofia, Bulgaria</li>
              <li><strong>Occupation:</strong> Web Developer</li>
            </ul>

            <h4 class="persona__h4">Needs & Goals</h4>
            <ul class="persona__profile__list">
              <li>Wants to change Euro in Lev quickly and for free</li>
              <li>Wants to start trading</li>
              <li>Wants to manage his online bank account easily</li>
              <li>Wants to spare money</li>
            </ul>
          </div>
        </div>
        <div class="persona__pros-cons col-sm-12 col-lg-4">
          <small
            >Most important features according to the interviewed users</small
          >
          <ul class="persona__list">
            <li class="persona__item">✅ Currency change</li>
            <li class="persona__item">✅ Instant transfers</li>
            <li class="persona__item">✅ Customer service</li>
          </ul>
          <ul class="persona__list">
            <li class="persona__item">❌ Trading</li>
            <li class="persona__item">❌ Gifts & Donations</li>
            <li class="persona__item">❌ Junior accounts</li>
            <li class="persona__item">❌ Budget creation</li>
          </ul>
        </div>
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
      border: 1px solid $light-pink;
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

    table tr {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: stretch;
      width: 65rem;
    }

    table td {
      padding: 1rem;
      border: 2px solid $light-pink;
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
    color: $light-pink;
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
