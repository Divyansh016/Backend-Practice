require('dotenv').config()
const express = require('express');
const app = express();

const port = 8080;

const githubData = {
    "login": "bmizerany",
    "id": 46,
    "node_id": "MDQ6VXNlcjQ2",
    "avatar_url": "https://avatars.githubusercontent.com/u/46?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/bmizerany",
    "html_url": "https://github.com/bmizerany",
    "followers_url": "https://api.github.com/users/bmizerany/followers",
    "following_url": "https://api.github.com/users/bmizerany/following{/other_user}",
    "gists_url": "https://api.github.com/users/bmizerany/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/bmizerany/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/bmizerany/subscriptions",
    "organizations_url": "https://api.github.com/users/bmizerany/orgs",
    "repos_url": "https://api.github.com/users/bmizerany/repos",
    "events_url": "https://api.github.com/users/bmizerany/events{/privacy}",
    "received_events_url": "https://api.github.com/users/bmizerany/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false
  }

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/github', (req, res) => {
    res.json(githubData);
})

app.get('/google', (req, res) => {
    res.send("Hello");
})

app.get('/youtube', (req, res) => {
    res.send("HELLO");
})

app.listen(process.env.PORT, () => {
    console.log(`Example app Listening on Port`);
})