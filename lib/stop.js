var debug = require("debug")('jobs'),
    fs    = require('fs');

module.exports = kill;

function kill(){
  var pid = findPid();

  if(!pid) {
    debug('Couldn\'t find shell-jobs.pid on the working directory.');
    process.stdout.write('\n\n');
    process.exit(1);
    return;
  }

  debug('Stopping %s', pid);

  try {
    process.kill(pid);
    fs.unlinkSync('./shell-jobs.pid');
  } catch(error){
    debug('Failed to kill %s: %s', pid, error);
  }

  process.stdout.write('\n\n');

  process.exit(1);
}


function findPid(){
  try {
    return fs.readFileSync('shell-jobs.pid').toString();
  } catch( readError ){
  }
}
