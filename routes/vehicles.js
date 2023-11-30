// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

var express = require('express');
const vehicles_controlers= require('../controllers/vehicles');
var router = express.Router();
/* GET vehicless */
router.get('/', vehicles_controlers.vehicles_view_all_Page );
module.exports = router;
//* GET detail vehicles page */
router.get('/detail', secured, vehicles_controlers.vehicles_view_one_Page);
//* GET create vehicles page */
router.get('/create', secured, vehicles_controlers.vehicles_create_Page);
//* GET create update page */
router.get('/update', secured, vehicles_controlers.vehicles_update_Page);
/* GET delete vehicles page */
router.get('/delete', secured,vehicles_controlers.vehicles_delete_Page);

