exports.api = function(req, res) {
    res.write('[');
    res.write('{"resource":"vehicless", ');
    res.write(' "verbs":["GET","POST","PUT", "DELETE"] ');
    res.write('}');
    res.write(']')
    res.send();
    };
    