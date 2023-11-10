var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var vehicles_controller = require('../controllers/vehicles');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// vehicles ROUTES ///
// POST request for creating a vehicles.
router.post('/vehicless', vehicles_controller.vehicles_create_post);
// DELETE request to delete vehicles.
router.delete('/vehicless/:id', vehicles_controller.vehicles_delete);
// PUT request to update vehicles.
router.put('/vehicless/:id', vehicles_controller.vehicles_update_put);
// GET request for one vehicles.
router.get('/vehicless/:id', vehicles_controller.vehicles_detail);
// GET request for list of all vehicles items.
router.get('/vehicless', vehicles_controller.vehicles_list);
module.exports = router;
// API for our resources

