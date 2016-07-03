# twitter-prizewinner

Twitter Prizewinner app

App to collect and sort one random tweet

**Build With:**

- We.js

## How to install

1. Clone this project
2. Create one database for this project
2. Enter in project folder
3. Copy config/local.example to config/local.js
4. Configure you database params
5. install npm packages:
```sh
npm install
```
6. start with:
```sh
we go
```

See http://wejs.org for we.js documentation

## Test

```
we test
```

## Development:

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


## License

MIT
