var Command = require('commander').Command,
    path    = require('path'),
    Q       = require('q');


exports.load = function () {
    var config,
        configFile,
        configFilePath,
        program = new Command(),
        deferred = Q.defer();

    program
        .version('0.0.1')
        .option('--host [hostname]', 'MongoDB host')
        .option('--port [port]', 'Mongo DB port', parseInt)
        .option('--config [file]', 'Config file path')
        .option('--webhost [hostname]', 'Hostname for the website')
        .option('--webport [port]', 'Port for the website', parseInt)
        .parse(process.argv);


    config = {
        db: {
            hostname: 'localhost',
            port: 27017
        },
        server: {
            hostname: 'localhost',
            port: 8080
        }
    };

    if(program.config){

        configFilePath = path.resolve(process.cwd(), program.config);

        try {
            configFile = require(configFilePath);
        } catch (ignore) {
        }

        if (!configFile) {
            deferred.reject(new Error('Cannot find the configuration file.'));
        }

        if(configFile.db && configFile.db.hostname){
            config.db.hostname = configFile.db.hostname;
        }

        if(configFile.db && configFile.db.port){
            config.db.port = configFile.db.port;
        }

        if(configFile.server && configFile.server.hostname){
            config.server.hostname = configFile.server.hostname;
        }

        if(configFile.server && configFile.server.port){
            config.server.port = configFile.server.port;
        }

    }else{
        if(program.host){
            config.db.hostname = program.host;
        }

        if(program.port){
            config.db.port = program.port;
        }

        if(program.webhost){
            config.server.hostname = program.webhost;
        }

        if(program.webport){
            config.server.port = program.webport;
        }
    }

    deferred.resolve(config);

    return deferred.promise;
};
