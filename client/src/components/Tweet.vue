<template>
  <div v-if="tweet.text" class='tweet'>
    <div class='tweet-user'>
      <div class="user-image-area">
        <img class="user-image" v-bind:src="tweet.userImage" />
      </div>

      <div class="tweet-text-names-area">

        <div class="user-names">
          <span class="user-displayName">{{tweet.userDisplayName}}</span>
          <span class="user-name">@{{tweet.userName}}</span>
          <a class="follow-link" target="_blank" href="https://twitter.com/{{tweet.userName}}">Follow</a>
        </div>

        <div class="tweet-text">{{tweet.text}}</div>
        <img class="tweet-image" v-bind:src="tweet.imageUrl" />

      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['tweet'],
  data() {
    return {};
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.tweet {
  padding: 10px 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
}
.tweet-text-names-area {
  display: block;
  margin-left: 52px;
}
.tweet-user {
  display: table;
  width: 100%;
  text-align: left;
  margin-bottom: 15px;
}

.tweet-user a {
  color: #000;
}
.user-image-area {
  width: 48px;
}
.user-image {
  float: left;
  margin-right: 4px;
}
.user-names {
  font-size: 13px;
}
.user-displayName {
  font-weight: bold;
}
.user-name {
  color: #777;
}
.follow-link  {
  float: right;
}
.tweet-text {
  margin-top: 5px;
}
.tweet-image {
  margin-top: 10px;
  max-width: 100%;
}
</style>
