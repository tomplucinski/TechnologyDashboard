const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    console.log('vote')
    // Once the database connection and models are set up, i will send the request to firestore DB
});

router.get('/', async (req, res) => {
    // Use this endpoint to retrieve all tallied votes from firestore DB
});

module.exports = router;