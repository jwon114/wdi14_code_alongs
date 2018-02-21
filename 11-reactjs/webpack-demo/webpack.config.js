// we will setup our automation here

// scan all your files from a starting point you specify for requires & import
// bundles everything together to a destination you specify
// thats the file you add with a single script tag

// node path library
var path = require('path')

const config = {
    entry: {
        app: './app' // start in this folder, relative paths here
    },
    output: {
        path: path.join(__dirname, 'build'), // need to use absolute paths here, __dirname to get the current directory, use a library for it because its best practice
        filename: 'bundle.js'
    }
}

module.exports = config // config is an obj