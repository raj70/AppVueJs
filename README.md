# raj-stack
Sample App build with VueJs, ExpressJs, MongoDb and NodeJs

# installation vue Js CLI
https://cli.vuejs.org/guide/#components-of-the-system

## full system to vue development
npm install -g @vue/cli

## create vue project
vue create rajen-stack

go through the option (manual process)

### application is created
run application:
npn run serve


## express js
https://expressjs.com
npm install express --save

### nodemon: restars server without needing to stop and start

## babel
https://babeljs.io
https://babeljs.io/docs/en/usage [follow what ever there....]

npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill


## install bootstrap
npm install bootstrap --save
npm install jquery popper.js --save


## concurrently: what to run all the server
npm install concurrently --save

And on package.json
"concurrently": "concurrently \"babel dev-server --out-dir prod-server --watch\" \"nodemon prod-server/index.js\" \"npm run serve\" "



## mongoose
https://mongoosejs.com

### example
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var blogSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
