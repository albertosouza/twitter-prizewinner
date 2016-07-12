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
      const apiURL = 'http://localhost:4000/tweet';
      const xhr = new XMLHttpRequest();
      const self = this;
      xhr.open('GET', apiURL);
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.onload = function onload() {
        self.tweets = JSON.parse(xhr.responseText).tweet;
      };
      xhr.send();
    },
  },
  components: {
    Hello,
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
