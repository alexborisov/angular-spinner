module.exports = function (grunt) {
    // measures the time each task takes
    require('time-grunt')(grunt);

    // load grunt tasks
    require('load-grunt-config')(grunt, {
        init: true,
        loadGruntTasks: {
            pattern: '*',
            config: require('./package.json'),
            scope: 'devDependencies'
        }
    });
};