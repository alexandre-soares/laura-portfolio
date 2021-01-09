<template>
  <div class="footer">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-between">
        <div class="col-sm-12 col-lg order-sm-6 order-lg-1">
          <div class="footer_credit">
            <span>Coded with ❤️ by Alexandre SOARES</span>
          </div>
        </div>
        <div class="col-sm-12 col-lg order-sm-1 order-lg-6">
          <div class="footer__email">
            <span>hello@laurasibille.com</span>
          </div>
        </div>
        <div class="col-sm-12 col-lg order-sm-12 order-lg-12">
          <nuxt-link
            tag="div"
            to="/privacy-policy"
            class="footer__privacy-policy"
          >
            <span>Privacy Policy</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  padding: 2rem 1rem;
  text-align: center;
  font-size: 1.4rem;
  background-color: $dark-black;

  @media only screen and (max-width: $bp-small) {
    & .col-sm-12 {
      margin: 2rem auto;
    }
  }

  &__privacy-policy {
    color: $light-pink;
    cursor: pointer;
  }

  &__email {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    color: $light-pink;
    & img {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
      margin-top: -2px;
      display: inline-block;
    }
  }
}
</style>
