const router = require('express').Router();
const verify = require('./verify.routes');

router.get('/', verify, (req, res) => {
    res.json({
        posts: {
            title: 'My first post',
            description: 'This is my description for post'
        }
    })
})

module.exports = router;