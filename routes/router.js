const express = require('express')
const router = express.Router()

router.use(express.static('public'))

router.use('/batting', require('./api/battingRoutes.js'))
router.use('/pitching', require('./api/pitchingRoutes.js'))

// home 
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Home',
        name: 'My Baseball Home Page!'
    })
})

module.exports = router