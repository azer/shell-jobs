var debug = require('debug')('jobs'),
    fs    = require('fs'),
    jobs  = require('../');

module.exports = cli;

function cli(args){
  process.stdout.write('\u001B[2J\u001B[0;0f\n\n');
  process.stdout.write('\n');
  fs.writeFileSync('shell-jobs.pid', process.pid);
  debug('pid (%s) written into shell-jobs.pid', process.pid);
  jobs.read(args).forEach(jobs.start);
}
