const router = require("express").Router();
// const { useTransition } = require("react");
const db = require('../models');

///Get places
router.get('/', (req, res) => {
  db.Place,find()
  .then((places) => {
    res.render('places/index', {places})
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

//post
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then( () => {
    req.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
});

//New
router.get('/new', (req, res) => {
  res.render('places/new');
});


//show
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/show', {places} )
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
});


//put
router.put('/:id', (req, res) => {
  res.send(`PUT /places/:id stub`)
})

//delete
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub');  
});

//edit
router.get('/:id/edit', (req, res) => {
    res.send(' GET edit form stub')
  
})


module.exports = router
