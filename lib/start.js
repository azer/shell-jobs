var debug = require("debug")('start'),
    exec  = require('./exec');

module.exports = all;

function all(jobs){
  debug('Starting %d new jobs', jobs.length);
  jobs.forEach(one);
}

function one(job){
  debug('Starting "%s" [%s]', job.command, job.time);

  var call = exec(job.command);

  if ( ! job.scheduledTo ) {
    setInterval(call, job.interval);
    return;
  }

  debug('"%s" is scheduled to run on %s', job.command, job.scheduledTo.shortDateTime);

  setTimeout(function(){
    debug('Scheduled job "%s" is starting...', job.command);
    call();
    setInterval(call, job.interval);
  }, job.scheduledTo.delay);

}
