<template>
  <div>
    <Persons />

    <Job-stories />

    <Guerilla />

    <Scenarios />

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
  </div>
</template>

<script>
import Guerilla from './content/Guerilla.vue'
import JobStories from './content/JobStories.vue'
import Persons from './content/Persons.vue'
import Scenarios from './content/Scenarios.vue'
export default {
  components: { Persons, JobStories, Guerilla, Scenarios },
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
