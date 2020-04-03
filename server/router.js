const router = require('express').Router();
const { getAllParks } = require ('./controller.js')

router
.route('/skateparks/api/getparks')
.get(getAllParks)

module.exports = router;