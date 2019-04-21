# raj-stack
Sample App build with VueJs, ExpressJs, MongoDb and NodeJs

# VueJs
To create Web application (Client Application)
## installation vue Js CLI
https://cli.vuejs.org/guide/#components-of-the-system

## full system to vue development
npm install -g @vue/cli [here -g means install globally]

## create vue project
vue create name-application [no capital letter]

go through the option (manual process)

### application is created
run application by: npm run serve


# express js
To create Web Application (Server Application)
https://expressjs.com
npm install express --save

## Note
### nodemon: restars server without needing to stop and start

## babel
For compling new JavaScript Syntax (ES6) to old JavaScript (ES5)

https://babeljs.io
https://babeljs.io/docs/en/usage [follow what ever there....]

npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill

# BootStrap

## install bootstrap
npm install bootstrap --save
npm install jquery popper.js --save

# To run application
Please check package.json, we have scripts. Basically, we need to run two applications (one client, one server).

## concurrently: runs all the server
npm install concurrently --save

And on package.json
"concurrently": "concurrently \"babel dev-server --out-dir prod-server --watch\" \"nodemon prod-server/index.js\" \"npm run serve\" "



# MongoDb
## to run mongo db server
 sudo mangod

## mongoose
https://mongoosejs.com

### example (to create entity)
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

# Json Web Tokens
npm install jsonwebtoken --save

# basic for Node Js

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
