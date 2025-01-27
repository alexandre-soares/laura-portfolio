<template>
  <div>
    <div class="container">
      <h3 class="portfolio-h3">Identifying & Prioritising Pain Points</h3>
      <p class="paragraph">
        After the interviews, I analysed the videos and identified the different
        pain points, grouped them by categories and sorted them on a 2x2 map, by
        how important they are to Revolut (x-axis) and to the users (y-axis).
      </p>
      <p class="paragraph">
        Assuming that the main business goal for the app is to drive up mobile
        revenue, I decided that the pain-points around adding and sending money
        were the most important for both Revolut and the users.
      </p>
    </div>

    <div class="graph blue-background">
      <img src="@/static/img/revolut-app/pain-points/graph.png" alt="graph" />
    </div>

    <div class="container">
      <h3 class="portfolio-h3">Defining the problem</h3>
      <ul class="problem__list">
        <li class="problem__item">❌ Dull and not very intuitive interface</li>
        <li class="problem__item">❌ Confusing icons</li>
        <li class="problem__item">❌ Badly highlighted buttons</li>
        <li class="problem__item">
          ❌ Too much space dedicated to secondary features
        </li>
        <li class="problem__item">
          ❌ Customer service that seems intentionally hidden and not accessible
        </li>
        <li class="problem__item">
          ❌ Need to think too much to know where to go
        </li>
        <li class="problem__item">
          ❌ Seemingly random information architecture
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
        src="@/static/img/revolut-app/pain-points/pain-point-1-1.png"
        alt="pain-point-1"
      />

      <p class="paragraph">
        Then, they go through the other features in details: but they are lost!
        Their eyes go up and down, looking for a logic in the architecture.
        Still looking for it after one year of use.
      </p>

      <img
        class="pain-point-img"
        src="@/static/img/revolut-app/pain-points/pain-point-1-2.png"
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
        two which neither user has used. We note that there is no direct access
        to this functionality, which is considered main by users. It requires at
        least 2 clicks to access it.
      </p>
    </div>

    <div class="blue-background">
      <img
        class="pain-point-img"
        src="@/static/img/revolut-app/pain-points/pain-point-2.png"
        alt="pain-point-3"
      />
    </div>

    <div class="container">
      <h4 class="pain-point-h4">
        <span class="light-pink">Pain Point 3:</span> <br />
        WHERE CAN I FIND YOU IN THIS MESS? I WANT TO SEND YOU MONEY
      </h4>
      <p class="paragraph">
        Let’s face it. Finding someone who is not already in your contact list
        can quickly become a challenge. Here are all the ways to find someone on
        the app:
      </p>
      <ul>
        <li>Look into your Revolut friend list</li>
        <li>Invite a friend to use Revolut in your contact list</li>
        <li>Add a new friend with his email / phone number</li>
        <li>Find a Revolut user around you</li>
        <li>Find an user with his Revolut ID starting by "@"</li>
        <li>
          Send a payment link to whatever messaging platform, the receiver needs
          to fill up information
        </li>
      </ul>
      <p class="paragraph">
        All of those are scattered in different places across the app. For this
        survey, I focused on
        <strong>finding someone with its username, starting with</strong> @.
        Only 2 users succeeded.
      </p>
    </div>

    <div class="blue-background">
      <img
        class="pain-point-img"
        src="@/static/img/revolut-app/pain-points/pain-point-3.png"
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
        to go back to the main pages.
      </p>
    </div>

    <div class="blue-background">
      <img
        class="pain-point-img"
        src="@/static/img/revolut-app/pain-points/pain-point-4.png"
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
        to find any help? The only way to contact customer service is the chat
        which is not very visible and could appear to be insufficient.
      </p>
    </div>

    <div class="blue-background">
      <div style="position: relative">
        <img
          class="pain-point-img"
          src="@/static/img/revolut-app/pain-points/pain-point-5.png"
          alt="pain-point-5"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.graph {
  & img {
    width: 75%;
    margin: 2rem auto;
    display: block;

    @media only screen and (max-width: $bp-small) {
      width: 90%;
    }
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

  @media only screen and (max-width: $bp-small) {
    width: 90%;
  }
}
</style>
