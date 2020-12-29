<template>
  <div class="container">
    <h3 class="page-content__title">Guerilla</h3>
    <p class="paragraph">
      Because of the covid related mandatory social distancing, I focused on
      personal connections with people I know in real life and online. The
      results were still perfectly usable.
    </p>
    <p class="paragraph">
      For maximum objectivity, I selected 6 people with different uses of the
      application:
    </p>

    <div class="row guerilla-user">
      <div class="row">
        <span class="guerilla-user__span">2 diligent user</span>
        <img src="@/static/img/icons/user.png" alt="user" />
        <img src="@/static/img/icons/user.png" alt="user" />
      </div>
      <div class="row">
        <span class="guerilla-user__span">2 casual user</span>
        <img src="@/static/img/icons/casual.png" alt="casual" />
        <img src="@/static/img/icons/casual.png" alt="casual" />
      </div>
      <div class="row">
        <span class="guerilla-user__span">2 non user</span>
        <img src="@/static/img/icons/non user.png" alt="no" />
        <img src="@/static/img/icons/non user.png" alt="no" />
      </div>
    </div>

    <p class="paragraph">This is how the survey works:</p>

    <ol class="survey-list row">
      <li>
        &#9201; Explain the purpose of this test:
        <strong>the test will not last more than 10 min</strong>
      </li>
      <li>
        &#128195;
        <strong
          >Give a quick explanation of what Revolut is and reassure them</strong
        >
        about the questions: They are there to highlight the problems identified
        upstream. It is therefore quite normal that they are unable to perform
        all the tasks requested.
      </li>
      <li>
        &#128483; Ask them to <strong>perform the 4 scenarios</strong> by making
        them think out loud! Any feedback is welcome!
      </li>
      <li>
        &#128249; <strong>Film or have their screen filmed</strong> with the
        actions they perform with their fingers.
      </li>
      <li>❤️ <strong>Thank them kindly</strong></li>
    </ol>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.guerilla-user {
  margin: 3rem;
  &__span {
    font-size: 1.8rem;
    margin-right: 2rem;
    font-weight: bold;
  }
}

.guerilla-user .row {
  align-items: center;
}

.survey-list {
  font-size: 1.6rem;
  display: block;
  text-align: left;
  & li {
    margin: 2rem 0;
  }
}
</style>
