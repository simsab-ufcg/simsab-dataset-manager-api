var EasyFtp = require ("easy-ftp");
var ftp = new EasyFtp();

exports.updateFiles = (req, res, next) => {
    res.status(200).send('Hello world!');
}

exports.connectFtp = (req, res, next) => {
    var config = req.body.config;
    var paths = req.body.paths;

    ftp.connect(config);

    ftp.upload(paths[0], paths[1], function(err){
        if (err) throw err;
        ftp.close();
    });

    res.status(201).send('deu certo');
    
}
