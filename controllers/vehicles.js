var vehicles = require('../models/vehicles');
// List of all vehicless
// exports.vehicles_list = function(req, res) {
// res.send('NOT IMPLEMENTED: vehicles list');
// };
exports.vehicles_list = async function(req, res) 
{
    try
    {
        thevehicless = await vehicles.find();
    
        res.send(thevehicless);
    }
    catch(err)
    {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
    
// for a specific vehicles.
exports.vehicles_detail = function(req, res) {
res.send('NOT IMPLEMENTED: vehicles detail: ' + req.params.id);
};
// Handle vehicles create on POST.
exports.vehicles_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: vehicles create POST');
};
// Handle vehicles delete form on DELETE.
exports.vehicles_delete = function(req, res) {
res.send('NOT IMPLEMENTED: vehicles delete DELETE ' + req.params.id);
};
// Handle vehicles update form on PUT.
exports.vehicles_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: vehicles update PUT' + req.params.id);
};
//VIEWS
// Handle a show all view
exports.vehicles_view_all_Page = async function(req, res) {
    try{
    thevehicless = await vehicles.find();
    res.render('vehicless', { title: 'vehicles Search Results', results: thevehicless });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle vehicles create on POST.
exports.vehicles_create_post = async function(req, res) {
console.log(req.body)
let document = new vehicles();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"vehicles_type":"goat", "cost":12, "size":"large"}
document.name = req.body.name;
document.color = req.body.color;
document.mileage = req.body.mileage;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};