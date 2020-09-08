const express = require('express');
const router = express.Router();
const axios = require('axios')

router.get('/react', async (req, res) => {
    try {
        const { data } = await axios.get('https://api.github.com/search/repositories', {
            params: {
                q: req.path
            }
        })
        res.json(data)
    } catch (err) {
        console.error(err)
    }
});

router.get('/angular', async (req, res) => {
    try {
        const { data } = await axios.get('https://api.github.com/search/repositories', {
            params: {
                q: req.path
            }
        })
        res.json(data)
    } catch (err) {
        console.error(err)
    }
});

router.get('/vue', async (req, res) => {
    try {
        const { data } = await axios.get('https://api.github.com/search/repositories', {
            params: {
                q: req.path
            }
        })
        res.json(data)
    } catch (err) {
        console.error(err)
    }
});

router.get('/ember', async (req, res) => {
    try {
        const { data } = await axios.get('https://api.github.com/search/repositories', {
            params: {
                q: req.path
            }
        })
        res.json(data)
    } catch (err) {
        console.error(err)
    }
});

module.exports = router;