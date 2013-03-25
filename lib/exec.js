var exec        = require('child_process').exec,
    debug       = require('debug'),
    moduleDebug = debug('exec');

var instanceCounter = 0;

module.exports = newExec;

function newExec(cmd){

  var localDebugName, localDebug, ind;

  ind            = ++instanceCounter;
  localDebugName = 'Job-' + ind;
  localDebug     = require('debug')(localDebugName);

  return function(){

    moduleDebug(ind + '. Running %s.', cmd);

    exec(cmd, function(error, stdout, sterr){

      if(error){
        moduleDebug('Job "%s" failed. Error: %s', cmd, error);
        return;
      }

      if(stdout){
        localDebug('Output: \n\n' + indent(stdout) + '\n\n ');
      }

    });
  }
}

function indent(lines){
  return lines
    .split('\n')
    .map(function(el){
      return '        ' + el;
    })
    .join('\n');
}
