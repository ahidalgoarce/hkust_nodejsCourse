const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/:id')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    console.log(JSON.stringify(req.headers));
    res.end('Will send dish with id: ' + req.body.id + ' to you!' + req.headers.id);
})
.post((req, res, next) => {
    res.statusCode = 201;
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description + 'and id: ' + req.body.id);
})
.put((req, res, next) => {
    res.end('Dish: ' + req.body.id + ' has been updated');
})
.delete((req, res, next) => {
    res.end('Deleting dish with id: ' + req.body.id);
});

module.exports = dishRouter;