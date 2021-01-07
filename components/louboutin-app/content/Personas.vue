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
                    <li>Mainly works from home</li>
                    <li>Manage his finance from his phone</li>
                    <li>Is in charge of domestics spendings</li>
                    <li>Is interested in trading</li>
                    <li>Save money for holidays</li>
                    <li>Lives in Bulgaria with a French bank account</li>
                    <li>Loves to travel abroad</li>
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
                    <li>Wants to change euro in lev for free and quick</li>
                    <li>Wants to start trading</li>
                    <li>Wants to manage his online bank account easily</li>
                    <li>Wants to spare money</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="mobile-version">
            <h4 class="persona__h4">This is Alex</h4>
            <img src="@/static/img/revolut-app/persona.png" alt="persona" />
            <h4 class="persona__h4">Behavior</h4>
            <ul class="persona__profile__list">
              <li>Mainly works from home</li>
              <li>Manage his finance from his phone</li>
              <li>Is in charge of domestics spendings</li>
              <li>Is interested in trading</li>
              <li>Save money for holidays</li>
              <li>Lives in Bulgaria with a French bank account</li>
              <li>Loves to travel abroad</li>
            </ul>

            <h4 class="persona__h4">Demographics</h4>
            <ul class="persona__profile__list">
              <li><strong>Age:</strong> 24</li>
              <li><strong>Location:</strong> Sofia, Bulgaria</li>
              <li><strong>Occupation:</strong> Web Developer</li>
            </ul>

            <h4 class="persona__h4">Needs & Goals</h4>
            <ul class="persona__profile__list">
              <li>Wants to change euro in lev for free and quick</li>
              <li>Wants to start trading</li>
              <li>Wants to manage his online bank account easily</li>
              <li>Wants to spare money</li>
            </ul>
          </div>
        </div>
        <div class="persona__pros-cons col-sm-12 col-lg-4">
          <small
            >Most important features according to the users interviewed</small
          >
          <ul class="persona__list">
            <li class="persona__item">
              <img src="@/static/img/icons/yes.png" alt="yes" />
              Change currency
            </li>
            <li class="persona__item">
              <img src="@/static/img/icons/yes.png" alt="yes" /> Instant
              transfers
            </li>
            <li class="persona__item">
              <img src="@/static/img/icons/yes.png" alt="yes" /> Customer
              service
            </li>
          </ul>
          <ul class="persona__list">
            <li class="persona__item">
              <img src="@/static/img/icons/no.png" alt="no" />
              Trading
            </li>
            <li class="persona__item">
              <img src="@/static/img/icons/no.png" alt="no" /> Gifts & Donations
            </li>
            <li class="persona__item">
              <img src="@/static/img/icons/no.png" alt="no" /> Junior accounts
            </li>
            <li class="persona__item">
              <img src="@/static/img/icons/no.png" alt="no" /> Budget creation
            </li>
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
    color: $light-pink;
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
