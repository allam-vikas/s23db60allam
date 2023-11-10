var vehicles = require('../models/vehicles');
//router.get('/vehicless/:id', vehicles_controller.vehicles_detail);
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
exports.vehicles_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await vehicles.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
 
// Handle vehicles delete form on DELETE.
exports.vehicles_delete = function(req, res) {
res.send('NOT IMPLEMENTED: vehicles delete DELETE ' + req.params.id);
};

exports.vehicles_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await vehicles.findById( req.params.id)
    // Do updates of properties
    if(req.body.name)
    toUpdate.name = req.body.name;
    if(req.body.color) toUpdate.cost = req.body.color;
    if(req.body.mileage) toUpdate.size = req.body.mileage;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
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
