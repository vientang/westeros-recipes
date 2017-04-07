const express = require('express')
const recipes = require('../data/recipes.json')
const router = express.Router()

/* GET recipes. */
router.get('/:resource', (req, res, next) => {
  const resource = req.params.resource
  if (resource !== 'recipes') {
    res.json({
	  	confirmation: 'Failed',
	  	resource: 'Invalid API request'
	  })
  }
  res.json({
  	confirmation: 'Success',
  	resource: {recipes: recipes}
  })
})

module.exports = router
