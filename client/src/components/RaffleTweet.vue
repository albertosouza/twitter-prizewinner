<template>
  <div class="raffle-tweet">

    <div v-if="doneRaffle" class="winner">
      <div v-for="winner in winners">
        <tweet :tweet="winner"></tweet>
      </div>
    </div>

    <div v-if="sorting" class="sorting">
      <img src="../assets/raffle-wheel-spinning.gif" >
    </div>

    <div v-else>
      <button @click="getWinner" class="raffle-btn button red">Get winner</button>
    </div>

  </div>
</template>

<script>
import config from '../configuration';
import Tweet from './Tweet';

export default {
  data() {
    return {
      winners: [],
      sorting: false,
      doneRaffle: false,
    };
  },
  methods: {
    getWinner: function getWinner() {
      this.sorting = true;
      this.doneRaffle = false;

      this.getWinnerFromServer();

      setTimeout(() => {
        this.sorting = false;
        this.doneRaffle = true;
      }, 5000);
    },
    getWinnerFromServer: function getWinnerFromServer() {
      const apiURL = `${config.apiHost}/tweet/random`;
      const xhr = new XMLHttpRequest();
      const self = this;
      xhr.open('GET', apiURL);
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.onload = function onload() {
        self.winners.push(JSON.parse(xhr.responseText).tweet);
      };
      xhr.send();
    },
  },
  components: {
    Tweet,
  },
};
</script>

<style scoped>
.raffle-tweet {
  margin-bottom: 25px;
}

.winner {
  /*border: gold 5px solid;*/
  box-shadow:  0px 0px 40px gold;
  margin: 35px 0px;
}


/* Button css get from http://cssdeck.com/labs/google-buttons */

.button {
  display: inline-block;
  background-color: #f5f5f5;
  background-image: -webkit-linear-gradient(top,#f5f5f5,#f1f1f1);
  background-image: -moz-linear-gradient(top,#f5f5f5,#f1f1f1);
  background-image: -ms-linear-gradient(top,#f5f5f5,#f1f1f1);
  background-image: -o-linear-gradient(top,#f5f5f5,#f1f1f1);
  background-image: linear-gradient(top,#f5f5f5,#f1f1f1);
  color: #444;

  border: 1px solid #dcdcdc;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;

  cursor: default;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  height: 40px;
  line-height: 27px;
  min-width: 54px;
  padding: 0 8px;
  text-decoration: none;
}

.button:hover {
  cursor: pointer;
  background-color: #F8F8F8;
  background-image: -webkit-linear-gradient(top,#f8f8f8,#f1f1f1);
  background-image: -moz-linear-gradient(top,#f8f8f8,#f1f1f1);
  background-image: -ms-linear-gradient(top,#f8f8f8,#f1f1f1);
  background-image: -o-linear-gradient(top,#f8f8f8,#f1f1f1);
  background-image: linear-gradient(top,#f8f8f8,#f1f1f1);

  border: 1px solid #C6C6C6;
  color: #333;

  -webkit-box-shadow: 0px 1px 1px rgba(0,0,0,.1);
  -moz-box-shadow: 0px 1px 1px rgba(0,0,0,.1);
  box-shadow: 0px 1px 1px rgba(0,0,0,.1);
}

.button.red {
  background-color: #D14836;
  background-image: -webkit-linear-gradient(top,#dd4b39,#d14836);
  background-image: -moz-linear-gradient(top,#dd4b39,#d14836);
  background-image: -ms-linear-gradient(top,#dd4b39,#d14836);
  background-image: -o-linear-gradient(top,#dd4b39,#d14836);
  background-image: linear-gradient(top,#dd4b39,#d14836);

  border: 1px solid transparent;
  color: white;
  text-shadow: 0 1px rgba(0, 0, 0, 0.1);
}

.button.red:hover {
  background-color: #C53727;
  background-image: -webkit-linear-gradient(top,#dd4b39,#c53727);
  background-image: -moz-linear-gradient(top,#dd4b39,#c53727);
  background-image: -ms-linear-gradient(top,#dd4b39,#c53727);
  background-image: -o-linear-gradient(top,#dd4b39,#c53727);
  background-image: linear-gradient(top,#dd4b39,#c53727);
}

</style>
