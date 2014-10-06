module.exports = function(coffeeBreak) {
	"use strict";
	
	coffeeBreak.registerTask('prepare', function(conf, logger, done) {
		logger.log('Running preprocessor task');
		done();
	});

	coffeeBreak.registerTask('coverage', function(conf, logger, done) {
		logger.log('Running codecoverage task');
		done();
	});

	coffeeBreak.registerTask('test', function(conf, logger, done) {
		
		if (conf.type !== 'php' || (conf.testRunner && conf.testRunner !== 'phpspec')) {
			done();
			return;
		}

		log.dev('Running PHPSpec tests', conf.project);

		var args = ['run'];
		var files = conf.tests;

		files.forEach(function(file) {
            logger.dev('Add file to mocha:' + path.join(conf.cwd, file));
            args.push(path.join(conf.cwd, file));
        }.bind(this));

        var cmd = path.join(__dirname, './bin/phpspec');
        var phpspec = spawn(cmd, args);

         phpspec.stdout.on('data', function(data) {
            process.stdout.write(data);
        });

        phpspec.stderr.on('data', function(data) {
            process.stdout.write(data);
        });

        phpspec.on('end', function() {
            done();
        });
	});
};