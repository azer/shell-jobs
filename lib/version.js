var puts = require('util').puts,
    pkg = require('../package.json');

module.exports = version;

function version(){
  puts(pkg.name + ' v' + pkg.version);
  process.exit(0);
}
