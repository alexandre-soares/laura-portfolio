<template>
  <div>
    <div class="page-background"></div>

    <div class="container">
      <div class="page-description">
        <small class="case-study-subtitle">Case Study</small>
        <div class="row">
          <div class="overview col">
            <h1 class="main-title">
              UX Research & Design - Revolut App Design
            </h1>
            <h2 class="subtitle">Year</h2>
            <small class="subinfo">2020</small>
            <h2 class="subtitle">Softwares</h2>
            <div class="icons">
              <img class="icon" src="@/static/img/icons/xd.png" alt="icon" />
              <img
                class="icon"
                src="@/static/img/icons/illustrator.png"
                alt="icon"
              />
              <img
                class="icon"
                src="@/static/img/icons/rotaro.png"
                alt="icon"
              />
            </div>
          </div>
          <div class="description col">
            <p class="paragraph">
              "THE NEW REVOLUT UPDATE S**KS" This is what I have been hearing
              all 2020 long. Dull colours, messy information, Revolut team
              managed to transform their initial great app in a nightmare for
              their user.
            </p>
            <p class="paragraph">
              With this UX research, I’ll try to see what’s wrong with the main
              features and suggest a new design. The goal being "Don’t let me
              think".
            </p>
            <p class="paragraph">
              <span style="font-style: italic"
                >I’ll make it short, because too much text is annoying, but I’ll
                be glad to spend one hour on zoom to cover all the missing
                points of this study.</span
              >
            </p>
            <p class="paragraph">
              Regarding the method, I wanted to be as close as possible to user
              needs with a <strong>human-centred</strong> approach and I used
              <strong>Lean UX</strong> design thinking. For user research, I
              relied on Google statistics showing that 85% of major usability
              problems can be solved with feedback from just 5 people.
              <strong>Guerrilla</strong> usability testing is therefore perfect
              for this case study!
            </p>
          </div>
          <section id="scroll-down" class="scroll-btn col-12">
            <a><span></span></a>
          </section>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="page-content">
        <h3 class="page-content__title">Persons</h3>
        <p class="paragraph">
          To start, I interviewed real Revolut users, finding the personas to be
          often biased: they are a mixture of assumptions and presumptions from
          our own interpretation, which are often not objective.
        </p>
        <p class="paragraph">
          I interviewed 8 people with different user profiles: They almost all
          live in different countries, some travel a lot, others not, but all
          shared their experience with the current app, why they had chosen this
          neo-bank and what are the functionalities that seem essential to them
          as well as those which are useless.
        </p>

        <div class="row persona">
          <div class="persona__profile col-8">
            <table>
              <tr>
                <td>
                  <h4 class="persona__h4">This is Alex</h4>
                  <img
                    src="@/static/img/revolut-app/persona.png"
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
            </table>
          </div>
          <div class="persona__pros-cons col-4">
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
                <img src="@/static/img/icons/no.png" alt="no" /> Gifts &
                Donations
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

    <div class="container">
      <div class="page-content">
        <h3 class="page-content__title">Job Stories</h3>

        <div class="row job-stories">
          <p class="paragraph">
            Wanting to - once again - emphasise context, causation, and
            motivations, over assumption sprinkled with subjectivity, I chose to
            create Job Stories, instead of User Stories.
          </p>
          <p class="paragraph">
            The latter are therefore based on the study of interviews conducted
            previously.
          </p>
        </div>
      </div>
    </div>

    <div class="row job-story blue-background">
      <div class="col-8">
        <p class="paragraph">
          "<span class="situation"
            >When I go to the restaurant with friends using Revolut</span
          >, there is always someone who pays for everybody.
          <span class="motivation">I want to refund this person</span>,
          <span class="outcome">so I can make a quick transfert</span> That’s
          awesome!"
        </p>
        <p class="paragraph">
          "<span class="situation">When I have to make a payment</span> and
          realise I don’t have money anymore on my Revolut account,
          <span class="outcome">I make a top-up</span> to
          <span class="motivation">refill it in a few seconds!</span> This is
          very convenient when you are abroad."
        </p>
        <p class="paragraph">
          "<span class="situation">When I travel</span>, I
          <span class="motivation"
            >don’t want to pay fees for changing currencies</span
          >. Who still pays for that in 2020?
          <span class="outcome"
            >So I create a new account for the currency</span
          >
          of the country I am travelling in."
        </p>
      </div>
      <div class="col-4">
        <span class="job-story__label job-story__label--situation"
          >Situation</span
        >
        <span class="job-story__label job-story__label--motivation"
          >Motivation</span
        >
        <span class="job-story__label job-story__label--outcome">Outcome</span>
      </div>
    </div>

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
            >Give a quick explanation of what Revolut is and reassure
            them</strong
          >
          about the questions: They are there to highlight the problems
          identified upstream. It is therefore quite normal that they are unable
          to perform all the tasks requested.
        </li>
        <li>
          &#128483; Ask them to <strong>perform the 4 scenarios</strong> by
          making them think out loud! Any feedback is welcome!
        </li>
        <li>
          &#128249; <strong>Film or have their screen filmed</strong> with the
          actions they perform with their fingers.
        </li>
        <li>❤️ <strong>Thank them kindly</strong></li>
      </ol>
    </div>

    <div class="container">
      <div class="scenarios">
        <div class="scenario">
          <span class="scenario__title">Scenario 1</span>
          <p class="paragraph">
            - For a friend’s birthday, someone you don’t know buys a common
            gift. He has a Revolut account, but does not wish to share his phone
            number. He only provides his identifier starting with "@" to receive
            an instant transfer.
            <strong>Where do you go to send the money to him?</strong>
          </p>
        </div>
        <div class="scenario">
          <span class="scenario__title">Scenario 2</span>
          <p class="paragraph">
            - You plan to go to Hong Kong next month. So you want to create an
            HDK account and add money to it.
            <strong>How do you do it?</strong>
          </p>
        </div>
        <div class="scenario">
          <span class="scenario__title">Scenario 3</span>
          <p class="paragraph">
            <strong
              >- Consult the expenses made during the previous month</strong
            >
          </p>
        </div>
        <div class="scenario">
          <span class="scenario__title">Scenario 4</span>
          <p class="paragraph">
            - By consulting your expenses, you notice an irregularity and decide
            to contact customer service.
            <strong
              >So find out where to contact customer service and send a message
              in the chat.</strong
            >
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <h3 class="page-content__title">
        Identifying & Prioritising Pain Points
      </h3>
      <p class="paragraph">
        After the interviews, I analysed the videos and identified the different
        pain points, grouped them by categories and sorted them on a 2x2 map, by
        how important they are to Revolut (x-axis) and to the users (y-axis). I
        won’t show you the post-its note, it seems useless the show you little
        coloured squared you won’t be able to read :)
      </p>
      <p class="paragraph">
        Assuming that the main business goal for the app is to drive up mobile
        revenue, I decided that the pain-points around adding and sending money
        were the most important for Revolut and the users.
      </p>
    </div>

    <div class="graph blue-background">
      <img src="@/static/img/revolut-app/pain-point-graph.png" alt="graph" />
    </div>

    <div class="container">
      <h3 class="page-content__title">Defining the problem</h3>
      <ul class="problem__list">
        <li class="problem__item">
          <img src="@/static/img/icons/no.png" alt="no" />
          Bland and not very intuitive interface
        </li>
        <li class="problem__item">
          <img src="@/static/img/icons/no.png" alt="no" />
          Confusing icons
        </li>
        <li class="problem__item">
          <img src="@/static/img/icons/no.png" alt="no" />
          Badly highlighted buttons
        </li>
        <li class="problem__item">
          <img src="@/static/img/icons/no.png" alt="no" />
          Too much space dedicated to secondary features
        </li>
        <li class="problem__item">
          <img src="@/static/img/icons/no.png" alt="no" />
          Customer service that seems intentionally hidden and not accessible
        </li>
        <li class="problem__item">
          <img src="@/static/img/icons/no.png" alt="no" />
          Need to think too much to know where to go
        </li>
        <li class="problem__item">
          <img src="@/static/img/icons/no.png" alt="no" />
          Seemingly random information architecture
        </li>
      </ul>

      <h4 class="pain-point-h4">
        <span class="light-pink">Pain Point 1:</span> <br />
        Where Am I Supposed To Look On This Dashboard?
      </h4>

      <p class="paragraph">
        Let’s be honest, this dashboard isn’t user-friendly. Useless spaces,
        confusing icons, way too many questions are left without answers. That’s
        a bad scenario for a user, especially on the dashboard: THEY ARE
        THINKING. It breaks their flow.
      </p>
      <p class="paragraph">
        So according to the previous interviews, this is what users see first:
      </p>
    </div>

    <div class="blue-background">
      <img
        class="pain-point-img"
        src="@/static/img/revolut-app/pain-point-1-img1.svg"
        alt="pain-point-1"
      />

      <p class="paragraph">
        Then, they go through the other features in details: but they are lost!
        Their eyes go up and down, looking for a logic in the architecture.
        Still looking for it after an year of use
      </p>

      <img
        class="pain-point-img"
        src="@/static/img/revolut-app/pain-point-1-img2.svg"
        alt="pain-point-2"
      />
    </div>

    <div class="container">
      <h4 class="pain-point-h4">
        <span class="light-pink">Pain Point 2:</span> <br />
        ACCOUNT CREATION not optimized
      </h4>

      <p class="paragraph">
        There are 3 ways to add a different currency account from the dashboard,
        two of which neither user has used. We note that there is no direct
        access to this functionality, which is considered main by users. It
        requires at least 2 clicks to access it.
      </p>
    </div>

    <div class="blue-background">
      <img
        class="pain-point-img"
        src="@/static/img/revolut-app/pain-point-3.svg"
        alt="pain-point-3"
      />
    </div>

    <div class="container">
      <h4 class="pain-point-h4">
        <span class="light-pink">Pain Point 3:</span> <br />
        WHERE I CAN FIND YOU IN THIS MESS? I WANT TO SEND YOU MONEY
      </h4>
      <p class="paragraph">
        Let’s face it. Finding someone who is not already in your contact list
        can quickly become a challenge. Here are all the ways to find someone on
        the app:
      </p>
      <ul>
        <li>
          Look into your Revolut friend listLook into your Revolut friend list
        </li>
        <li>Invite a friend to use Revolut in your contact list</li>
        <li>Add a new friend with his email / phone number</li>
        <li>Find a Revolut user around you</li>
        <li>Find an user with his Revolut ID striating by "@"</li>
        <li>
          Send a payment link to whatever messaging platform, the receiver needs
          to fill information up
        </li>
      </ul>
      <p class="paragraph">
        All of those are scattered in different places across the app. I don’t
        know how Revolut team thought about this, but you have to the path for
        each way to send money, because they are all different! For this survey,
        I focused on
        <strong>finding someone with its username, starting with</strong> @.
        Only 2 users succeeded.
      </p>
    </div>

    <div class="blue-background">
      <img
        class="pain-point-img"
        src="@/static/img/revolut-app/pain-point-3.svg"
        alt="pain-point-3"
      />
    </div>

    <div class="container">
      <h4 class="pain-point-h4">
        <span class="light-pink">Pain Point 4:</span> <br />
        LACK OF VISIBILITY OF THE PREVIOUS TRANSACTIONS
      </h4>
      <p class="paragraph">
        Viewing past transactions is not really highlighted, since only the last
        transaction is visible from the dashboard. To see more, there are two
        entrances, which are not really visible or clear. Oh and by the way, why
        do you take the navigation bar off ? I don’t want to multiply the clicks
        to go back on the main pages.
      </p>
    </div>

    <div class="blue-background">
      <img
        class="pain-point-img"
        src="@/static/img/revolut-app/pain-point-4.svg"
        alt="pain-point-4"
      />
    </div>

    <div class="container">
      <h4 class="pain-point-h4">
        <span class="light-pink">Pain Point 5:</span> <br />
        ACCESS TO THE CHAT SERVICE, WITH DISTINCT Rube Goldberg LOGIC
      </h4>
      <p class="paragraph">
        How people are supposed to guess they have to go through their profile
        to find any help? The only way to contact customer service is the chat.
        From my point of view, this was deliberately thought of by Revolut to
        compensate for the lack of staff assigned to the chat.
      </p>
    </div>

    <div class="blue-background">
      <img
        class="pain-point-img"
        src="@/static/img/revolut-app/pain-point-5.svg"
        alt="pain-point-5"
      />
    </div>

    <div class="container">
      <h3 class="page-content__title">Ideating the solution</h3>
      <img
        class="img"
        src="@/static/img/revolut-app/wireframe Revolut.svg"
        alt="wireframe"
      />
    </div>

    <div class="container">
      <h3 class="page-content__title">Tests & Iterations</h3>
      <p class="paragraph">
        After the wireframes, I jumped to Adobe XD to make the mockups and the
        final prototype. I incorporated the comments made by users from the
        first phase. I suggested this new layout to 6 new testers. I reiterated
        it once, until I reached a <strong>100% success rate</strong>
      </p>
      <img
        class="img"
        src="@/static/img/revolut-app/pre-video.svg"
        alt="pre-video"
      />
    </div>

    <div class="container">
      <h4 class="pain-point-h4">
        <span class="light-pink">Pain Point 1:</span> <br />
        Where Am I Supposed To Look On This Dashboard?
      </h4>
    </div>

    <div class="radient-background">
      <div class="container">
        <p class="paragraph">
          <span class="outcome"><strong>Design solution:</strong></span> all the
          main features are easily accessible from the dashboard. Attractive
          colors catch the eye in the upper third of the screen which gradually
          brings it down in an orderly way: the amount of the accounts > the
          functional icons > the transaction statement and finally the
          navigation bar to keep on visiting the app.
        </p>
        <img
          class="img"
          src="@/static/img/revolut-app/solution-pp-1.svg"
          alt="pp-1"
        />
      </div>

      <div class="black-background">
        <div class="container">
          <h4 class="pain-point-h4">
            <span class="light-pink">Pain Point 2:</span> <br />
            ACCOUNT CREATION not optimized
          </h4>
        </div>
      </div>

      <div class="container">
        <p class="paragraph">
          <span class="outcome"><strong>Design solution:</strong></span> Create
          a button immediately accessible from the Dashboard with a recognisable
          icon and keep another secondary entry point: through "Add money".
        </p>
        <img
          class="img"
          src="@/static/img/revolut-app/solution-pp-2.svg"
          alt="pp-2"
        />
      </div>

      <div class="black-background">
        <div class="container">
          <h4 class="pain-point-h4">
            <span class="light-pink">Pain Point 3:</span> <br />
            WHERE I CAN FIND YOU IN THIS MESS? I WANT TO SEND YOU MONEY
          </h4>
        </div>
      </div>

      <div class="container">
        <p class="paragraph">
          <span class="outcome"><strong>Design solution:</strong></span> Bring
          together all the different ways to find a contact to send money.
          Finding a contact from their username (@) is now instinctive.
          <img
            class="img"
            src="@/static/img/revolut-app/solution-pp-3.svg"
            alt="pp-3"
          />
        </p>
      </div>

      <div class="black-background">
        <div class="container">
          <h4 class="pain-point-h4">
            <span class="light-pink">Pain Point 4:</span> <br />
            LACK OF VISIBILITY OF THE PREVIOUS TRANSACTIONS
          </h4>
        </div>
      </div>

      <div class="container">
        <p class="paragraph">
          <span class="outcome"><strong>Design solution:</strong></span> No need
          to look for the small clickable link "see all" to display all the
          transactions: they can be viewed directly in their entirety from the
          dashboard. You just have to scroll or search more precisely using the
          search bar. We replace the "see all" link with an icon allowing the
          analysis of expenses, corresponding to one of the icons at the top
          right.
          <img
            class="img"
            src="@/static/img/revolut-app/solution-pp-4.svg"
            alt="pp-4"
          />
        </p>
      </div>

      <div class="black-background">
        <div class="container">
          <h4 class="pain-point-h4">
            <span class="light-pink">Pain Point 5:</span> <br />
            ACCESS TO THE CHAT SERVICE, WITH DISTINCT Rube Goldberg LOGIC
          </h4>
        </div>
      </div>

      <div class="container">
        <p class="paragraph">
          <span class="outcome"><strong>Design solution:</strong></span> Place
          an icon accessible from all pages to refer to the F.A.Q. but also to
          the chat. However, given the likely shortage of staff to answer user
          questions, I left the chat at the bottom of the page, forcing the user
          to scroll.
          <img
            class="img"
            src="@/static/img/revolut-app/solution-pp-5.svg"
            alt="pp-5"
          />
        </p>
      </div>
    </div>

    <div class="container">
      <h3 class="page-content__title">Final Result</h3>
      <p class="paragraph">
        Revolut is a very useful everyday app for tracking expenses and making
        purchases abroad free of charge. Despite all these advantages, the user
        experience can be marred by a lack of clarity and logic. <br />The
        redesign of the application made its use much smoother and more
        satisfactory with testers, with a 100% success rate on the pain points
        highlighted during the study carried out with regular users.
      </p>
      <img
        class="img"
        src="@/static/img/revolut-app/final-result-table.svg"
        alt="final-result"
      />
    </div>

    <div class="container">
      <h3 class="page-content__title">Prototype</h3>
    </div>

    <div class="container-fluid">
      <div class="bottom-row">
        <nuxt-link tag="div" class="bottom-row__item" to="/louboutin-app">
          <i class="fas fa-chevron-left"></i>Previous work
        </nuxt-link>
        <nuxt-link tag="div" class="bottom-row__item" to="/"
          ><i class="fas fa-redo"></i>All works</nuxt-link
        >
        <nuxt-link tag="div" class="bottom-row__item" to="/ui-design">
          Next work<i class="fas fa-chevron-right"></i
        ></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.page-background {
  background-image: url('../../static/img/revolut-app/background.jpeg') !important;
}

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

.persona {
  margin: 10rem 0;
  font-size: 1.7rem;
  align-items: center;
  justify-content: space-between;

  &__profile {
    & img {
      width: 85%;
      margin: 0 auto;
      display: block;
    }

    &__list li {
      margin: 1rem;
    }

    table {
      border-collapse: collapse;
      margin: 0 auto;
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
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 1rem 0;

    & img {
      margin-right: 1rem;
    }
  }
}

.job-stories {
}

html.light .job-story {
  color: $light-white;
}

.job-story {
  & .paragraph {
    margin: 3rem 0;
    text-align: center;

    &:nth-child(1) {
      margin-top: 0;
    }
  }

  &__label {
    display: block;
    margin: 3rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    &--situation {
      color: $light-pink;
    }

    &--motivation {
      color: #948fe2;
    }

    &--outcome {
      color: #97da7b;
    }
  }
}

.situation {
  color: $light-pink;
}

.motivation {
  color: #948fe2;
}

.outcome {
  color: #97da7b;
}

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

.graph {
  & img {
    width: 75%;
    margin: 2rem auto;
    display: block;
  }
}

.problem__list {
  list-style-type: none;

  & li {
    display: flex;
    align-items: center;
    margin: 2rem 0;
  }

  & img {
    margin-right: 3rem;
  }
}

.pain-point-h4 {
  margin: 3rem 0;
  font-size: 1.9rem;
  line-height: 3rem;
}

.pain-point-img {
  width: 75%;
  margin: 5rem auto;
  display: block;
}

.img {
  width: 75%;
  margin: 5rem auto;
  display: block;
}

.radient-background {
  background: rgb(100, 15, 137);
  background: linear-gradient(
    48deg,
    rgba(100, 15, 137, 1) 0%,
    rgba(63, 36, 139, 1) 59%,
    rgba(35, 51, 128, 1) 100%
  );
  padding: 4rem 0;

  & p {
    margin: 3rem 0 !important;
  }

  & .black-background {
    background-color: $dark-blue;
    padding: 2rem 0;
  }
}
</style>
