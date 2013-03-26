var debug     = require("debug")('parse'),
    timeUnits = require("./time");

var reLineEnd   = /\#[^\=\>]* \=\>([\s\w]+$)/,
    reTime      = /(\d+\s\w+)/g,
    reTimeEntry = /(\d+) (\w+)/;

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


function time(input){

  var matching, entries = [];

  if( ! reTime.test(input) || ! /^\d[\w\s]+[a-z]$/.test(input) ) throw new Error('Invalid time: ' + input);

  debug('Parsing "%s".', input, reTime.exec(input));

  reTime = /(\d+\s\w+)/g;

  while( matching = reTime.exec(input) ){
    debug('%s recognized.', input);
    entries.push(matching[1]);
  }

  return entries
    .map(unhumanizedTime)
    .reduce(function(a, b){
      return a + b;
    });

}

function trim(str){
  return str.trim();
}

function unhumanizedTime(input){

  var matching, n, unit;

  if( ! reTimeEntry ) throw new Error('Invalid time: ' + input);

  debug('Unhumanizing %s', input);

  matching = input.split(reTimeEntry);
  n        = matching[1];
  unit     = lower(matching[2]);

  if( ! timeUnits[unit] ) throw new Error('Unrecognized time unit: ' + unit);

  return timeUnits[unit](parseInt(n));
}
