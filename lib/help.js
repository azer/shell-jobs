var fs   = require("fs"),
    puts = require('util').puts;

module.exports = function(){
  var man = fs.readFileSync(__dirname + '/../docs/man');
  puts(man);
  process.exit(0);
};
