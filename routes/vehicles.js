var express = require('express');
const vehicles_controlers= require('../controllers/vehicles');
var router = express.Router();
/* GET vehicless */
router.get('/', vehicles_controlers.vehicles_view_all_Page );
module.exports = router;
//* GET detail vehicles page */
router.get('/detail', vehicles_controlers.vehicles_view_one_Page);
//* GET create vehicles page */
router.get('/create', vehicles_controlers.vehicles_create_Page);
//* GET create update page */
router.get('/update', vehicles_controlers.vehicles_update_Page);
/* GET delete vehicles page */
router.get('/delete', vehicles_controlers.vehicles_delete_Page);

