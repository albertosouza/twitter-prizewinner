<template>
  <div id="app">
    <h1>Twitter prize winner</h1>

    <raffle-tweet></raffle-tweet>

    <div id="tweets">
      <div v-for="tweet in tweets">
        <tweet :tweet="tweet"></tweet>
      </div>
    </div>

  </div>
</template>

<script>
import config from './configuration';
import Tweet from './components/Tweet';
import RaffleTweet from './components/RaffleTweet';

export default {
  data() {
    return {
      tweets: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData: function fetchData() {
      const apiURL = `${config.apiHost}/tweet`;
      const xhr = new XMLHttpRequest();
      const self = this;
      xhr.open('GET', apiURL);
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.onload = function onload() {
        self.tweets = JSON.parse(xhr.responseText).tweet;

        self.getNewTweets();
      };
      xhr.send();
    },

    getNewTweets: function getNewTweets() {
      setTimeout(() => {
        let apiURL = `${config.apiHost}/tweet?since=`;
        apiURL += new Date().toISOString();
        const xhr = new XMLHttpRequest();
        const self = this;
        xhr.open('GET', apiURL);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onload = function onload() {
          let newTweets;

          try {
            newTweets = JSON.parse(xhr.responseText).tweet;
          } catch (e) {
            // err on parse
          }

          if (newTweets) {
            for (let i = 0; i < newTweets.length; i++) {
              self.tweets.unshift(newTweets[i]);
            }
          }

          self.getNewTweets();
        };
        xhr.send();
      }, 3000);
    },
  },
  components: {
    Tweet,
    RaffleTweet,
  },
};
</script>

<style>

body {
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  color: #2c3e50;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
