const express = require ('express');
const router = express.Router();
const fs = require('fs');
const jsonData = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))

router.use('/static',express.static('public'));

router.get('/', (req,res)=> {
    res.locals.project = jsonData.projects;
    res.render('index');
})

router.get('/projects/:id', (req,res, next) => {
    res.locals.project = jsonData.projects[req.params.id];
    if (typeof(res.locals.project) !== 'undefined') {
    res.render('project');
    } else {
        const err = new Error('Project Not found');
        err.status = 500;
        next(err)
    }
})

router.get('/about', (req,res)=> {
    res.render('about');
})

module.exports = router;