const axios = require('axios'); //axios is a promise based http client for the browser and node.js

let username = 'mohammedabboudi';

axios.get(`https://api.github.com/users/${username}`).then((res)=>{

    console.log(res.data);

}).catch((err)=>{

    console.log(err);
})