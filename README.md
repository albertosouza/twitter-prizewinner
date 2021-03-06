# twitter-prizewinner

Twitter Prizewinner app

App to collect and raffle one random tweet

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/albertosouza/twitter-prizewinner/tree/master)

**Build With:**

- We.js
- Vue.js

## How to install to development

Fist install and start the client side avaible in client folder, see client/README.md

1. Clone this project
2. Create one database for this project
2. Enter in project folder
3. Copy config/local.example to config/local.js
4. Configure you database params
5. install npm packages:
  ```
  we i
  ```
6. start with:
  ```
  we go
  ```

See http://wejs.org for we.js documentation

## Test

```
we test
```

## Live development:

<a href="https://www.youtube.com/watch?v=yysFzQs_t7w" target="_blank"><img src="http://img.youtube.com/vi/yysFzQs_t7w/0.jpg"
alt="Screen cast in pt-br" width="240" height="180" border="10" /></a>

1. generate the app with default settings
2. create the resource: yo wejs:resource tweet text:string lang:string userName:string userDisplayName:string userImage:text imageUrl:text
3. add the twitter module: npm i twitter --save
4. add twitter apiKeys configuration
5. add twitter tag followed configuration
6. collect and save twitters
7. get one randon tweet user and tweet data
8. set find_tweet permision in authenticated and unAuthenticated roles
9. add deploy to heroku configuration
10. add views and one theme
11. add build npm command: "build": "gulp build",

UPDATE to add vue.js:

1. install vue cli
2. generate one vue app inside client folder
3. add client app static middleware to client/app
4. develop the client
5. build the client
6. remove uneed we.js plugins


## How to build for production

```sh
npm run build
```

And test with:

```sh
we go --prod
```

## License

MIT
