var express  = require( 'express' ),
    path     = require( 'path' ),
    bp       = require('body-parser'),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();

    app.use(bp.json({extended: true}));
    // set an environment variable called APPROOT to keep track of the root folder of your app
    process.env['APPROOT'] = __dirname;

    // add directory for static files you wrote to serve html and js files to the browser
    app.use(express.static('client'));
    // also add a directory for static files from the bower library
    app.use(express.static('bower_components'));

    //require mongoose configuration, use path.join to build the route
    require(path.join(process.env['APPROOT'], 'server/config/mongoose.js'));
    //require routes configuration, get a function from the module.exports, that gets invoked while passing it the app
    require(path.join(process.env['APPROOT'], 'server/config/routes.js'))(app);

    require("./server/config/routes.js")(app);

    exports = module.exports = app;

    //start the server
    app.listen(8000, function(){
      console.log('listening on port 8000');
    });
