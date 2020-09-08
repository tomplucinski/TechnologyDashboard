const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get('/', async function(req, res) {
    res.json('express return data')
    // try {
    //     const { data } = await axios.get('https://api.github.com/search/repositories?q=react')
    //     const stargazers = data.items[0].stargazers_count
    //     const forks = data.items[0].forks_count
    //     const issues = data.items[0].open_issues_count
    //     console.log("stargazers ", stargazers)
    //     console.log("forks ", forks)
    //     console.log("issues ", issues)
    //     res.set({
    //         'Cache-Control': 'no-cache',
    //         'Content-Type': 'text/event-stream',
    //         'Connection': 'keep-alive'
    //     });
    //     res.flushHeaders();
    //
    //     // Tell the client to retry every 10 seconds if connectivity is lost
    //     res.write('retry: 10000\n\n');
    //
    //     while (true) {
    //         await new Promise(resolve => setTimeout(resolve, 1000));
    //
    //         console.log('Emit', stargazers);
    //         // Emit an SSE that contains the current 'count' as a string
    //         res.write(`data: ${stargazers}\n\n`);
    //     }
    // } catch (err) {
    //     console.error(err)
    // }
});

module.exports = router;