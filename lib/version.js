var puts = require('util').puts;

module.exports = version;

function version(){
  puts('fox v' + require('../package.json').version);
  process.exit(0);
}
