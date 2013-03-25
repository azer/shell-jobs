process.env.DEBUG || ( process.env.DEBUG = 'jobs, exec' );

process.stdout.write('\u001B[2J\u001B[0;0f\n\n');

module.exports = enableCommandOutputs;

function enableCommandOutputs(commands){

  process.env.DEBUG += ', ' + commands
    .split(',')
    .map(commandDebugName)
    .join(',');

}

function commandDebugName(ind){
  return 'Job-' + ind;
}
