// link to connect packagea
var connect = require('connect');

// link to the url module to parse url parameters
var url = require('url');

// instantiate a new connect object
var app = connect();

var calculate = function(req, res, next) {
    
    // get the values from url
    var qs = url.parse(req.url, true).query;
    
    var method = qs.method;
    var x = parseFloat(qs.x);
    var y = parseFloat(qs.y);

    // the total value
    var total 

    // determine what parameter is accpeted by method
    if (method == "add") {
        total = x + y;
        res.end(x + ' + ' + y + ' = ' + total);
    }
    
    else if (method == "subtract") {
        total = x - y;
        res.end(x + ' - ' + y + ' = ' + total);
    }
    
    else if (method == "multiply") {
        total = x * y;
        res.end(x + '  * ' + y + ' = ' + total);
    }
    
    else if (method == "divide") {
        total = x / y;
        res.end(x + ' / ' + y + ' = ' + total);
    }
    
    else {
        res.end('Wrong Method');
    }

};

// execute calculate function when requests come in
app.use('/lab3', calculate);

// start the web server on port 3000
app.listen(3000);

// display message that the server is running
console.log('Connect running on port 3000');