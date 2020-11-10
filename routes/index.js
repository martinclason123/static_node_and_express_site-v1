const express = require ('express');
const router = express.Router();
const fs = require('fs');
const jsonData = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))

router.use('/static',express.static('public'));

router.get('/', (req,res)=> {
    res.locals.project = jsonData.projects;
    res.render('index');
})

router.get('/projects/:id', (req,res) => {
    res.locals.project = jsonData.projects[req.params.id];
    res.render('project');
})

router.get('/about', (req,res)=> {
    res.render('about');
})

module.exports = router;