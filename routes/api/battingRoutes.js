const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res)=> {

    axios.get('https://api.sampleapis.com/baseball/hitsCareer')
        .then(resp => {
            res.render('pages/allStats.ejs', {
                title: 'batting - career hits',
                name: 'Career Hits',
                data: resp.data
            })
        })
})

router.get('/:stats', (req, res)=> {
    const stats = req.params.stats

    axios.get(`https://api.sampleapis.com/baseball/${stats}`)
        .then(resp => {
            res.render('pages/allStats.ejs', {
                title: `batting - ${stats}`,
                name: stats,
                data: resp.data
            })
        })
})


module.exports = router