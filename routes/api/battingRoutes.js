const express = require('express')
const router = express.Router()
const axios = require('axios')

const position = 'batting'

let battingArr = []

router.get('/', (req, res)=> {

    axios.get('https://api.sampleapis.com/baseball/hitsCareer')
        .then(resp => {

            battingArr = resp.data 


            res.render('pages/allStats.ejs', {
                title: 'batting - career hits',
                name: 'Career Hits',
                data: battingArr,
                stats: 'hitsCareer',
                position
            })
        })
})

router.get('/:stats', (req, res)=> {
    let stats = req.params.stats

    axios.get(`https://api.sampleapis.com/baseball/${stats}`)
        .then(resp => {
            battingArr = resp.data

            // stats = stats == 'stolenBasesCareer' || stats == 'stolenBasesSingleSeason' ? 'homeRuns' : stats
            res.render('pages/allStats.ejs', {
                title: `batting - ${stats}`,
                name: stats,
                data: battingArr,
                stats,
                position
            })
        })
})

router.get('/:stats/:id', (req, res)=> {
    let stats = req.params.stats
    let id = req.params.id



    axios.get(`https://api.sampleapis.com/baseball/${stats}/${id}`)
        .then(resp => {
            res.render('pages/statsSingle', {
                title: resp.data.Player || resp.data.Name,
                name: resp.data.Player || resp.data.Name,
                data: resp.data,
                stats,
                position,
            })
        })
})


module.exports = router