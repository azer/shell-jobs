process.env.DEBUG || ( process.env.DEBUG = 'jobs, exec, confirm, start, read' );

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
