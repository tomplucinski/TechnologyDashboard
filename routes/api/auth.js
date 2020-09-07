const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        console.log('express hit')
        // const { email, password } = req.body
        // const res = await firebaseAuth.createUserWithEmailAndPassword(email, password)
        // console.log("RESPONSE", res)
        // // const token = await Object.entries(res.user)[5][1].b
        // // await localStorage.setItem('token', token)
        res.send("res")
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;