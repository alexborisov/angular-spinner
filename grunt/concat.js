module.exports = function (grunt, options) {

    var files = [
        'src/**/module.*.js',
        'src/**/*.js'
    ];
    var out = 'dist/angular-spinner.js';
    return {
        options: {
            sourceMap: false,
            separator: ';\n'
        },
        dev: {
            src: files,
            dest: out,
            options: {
                sourceMap: true
            }
        },
        build: {
            src: files,
            dest: out
        }
    }
};
