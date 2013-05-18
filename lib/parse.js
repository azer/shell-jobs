var debug = require("debug")('parse'),
    time = require("english-time");

var reLineEnd   = /\#[^\=\>]* \=\>([\s\w]+$)/;

module.exports = doc;

function doc(input){
  return input
    .split('\n')
    .filter(notEmpty)
    .map(line);
}

function notEmpty(str){
  return !! str;
}


function line(input){

  var matching, command, interval;

  if( ! reLineEnd.test(input) ) throw new Error('Invalid input: ' + input);

  matching = input.split(reLineEnd).map(trim);
  command  = matching[0];
  interval = time(lower(matching[1]));

  debug('%s parsed as %s miliseconds', matching[1], interval);

  return {
    command  : command,
    interval : interval,
    time     : matching[1]
  }

}

function lower(str){
  return str.toLowerCase();
}

function trim(str){
  return str.trim();
}
