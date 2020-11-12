const express = require ('express');
const router = express.Router();
//imports the JSON file
const fs = require('fs');
const jsonData = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))

router.use('/static',express.static('public'));

// the default route
router.get('/', (req,res)=> {
    //passes the JSON data to the pug file
    res.locals.project = jsonData.projects;
    res.render('index');
})

// dynamic route for the individual projects
router.get('/projects/:id', (req,res, next) => {
    //provides the project ID to the pug file
    res.locals.project = jsonData.projects[req.params.id];

    // checks to see if a project that does not exist has been requested
    if (typeof(res.locals.project) !== 'undefined') {
    // if the route is legit, serve it to the user
    res.render('project');
    } else {
        // otherwise throw the default error
        const err = new Error('Project Not found');
        err.status = 500;
        next(err)
    }
})

// route for the about page
router.get('/about', (req,res)=> {
    res.render('about');
})

module.exports = router;