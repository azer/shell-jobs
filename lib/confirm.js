var debug = require("debug")('confirm'),
    read  = require('../').read;

module.exports = confirm;

function confirm(args){
  var all = read(args);

  all.forEach(function(jobs){
    jobs.forEach(function(job){
      debug('"%s"%s=> %s',
            job.time,
            job.scheduledTo ? ', scheduled to start on ' + job.scheduledTo.date + ' ' : ' ',
            job.interval);
    });
  });

  process.exit(1);
}
