const express = require('express')
const router = express.Router()
const axios = require('axios')

const position = 'pitching'

router.get('/', (req, res)=> {
    axios.get('https://api.sampleapis.com/baseball/eraCareer')
        .then(resp => {
            res.render('pages/allStats', {
                title: 'Pitching - Career ERA',
                name: 'Career ERA',
                data: resp.data,
                stats: 'eraCareer',
                position
            })
        })
})

router.get('/eraSingleSeason', (req, res)=> {
    axios.get('https://api.sampleapis.com/baseball/eraSingleSeason')
        .then(resp => {
            res.render('pages/allStats', {
                title: 'Pitching - Season ERA',
                name: 'Single Season ERA',
                data: resp.data,
                stats: 'eraSingleSeason',
                position

            })
        })
})

router.get('/:stats/:id', (req, res)=> {

    const stats = req.params.stats 
    const id = req.params.id

    let prev
    let next
    
    axios.get(`https://api.sampleapis.com/baseball/${stats}/${id - 1}`).then(resp => prev = resp.data)

    axios.get(`https://api.sampleapis.com/baseball/${stats}/${id + 1}`).then(resp => next = resp.data)

    axios.get(`https://api.sampleapis.com/baseball/${stats}/${id}`)
        .then(resp => {
            res.render('pages/statsSingle', {
                title: resp.data.Player,
                name: resp.data.Player,
                data: resp.data,
                stats,
                position,
                prev, 
                next
            })
        })
})

module.exports = router