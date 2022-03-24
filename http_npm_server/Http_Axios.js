const axios = require('axios'); //axios is a promise based http client for the browser and node.js, it allows you to do http or https requests.

let username = 'mohammedabboudi';

axios.get(`https://api.github.com/users/${username}`).then((res)=>{

    console.log(res.data);

}).catch((err)=>{

    console.log(err);
})