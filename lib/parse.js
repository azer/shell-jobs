var debug       = require("debug")('parse'),
    nextTime    = require('next-time'),
    englishTime = require("english-time");

var reLineEnd = /\#[^\=\>]* \=\>([^#=>]+$)/,
    reDelay   = /(?:^|(?:^[a-z\s]+\s))([0-9\:]+[ap]m)(?:[^\w]+|$)/;

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

  var matching, command, delay, interval;

  if( ! reLineEnd.test(input) ) throw new Error('Invalid input: ' + input);

  matching = input.split(reLineEnd).map(trim);
  command  = matching[0];
  delay    = lower(matching[1]).match(reDelay);
  interval = englishTime(lower(matching[1])) || 86400000;

  delay && ( delay = parseDelay(delay[1]) );

  debug('%s parsed as %s miliseconds%s', matching[1], interval, delay ? ', scheduled to ' + delay.shortDateTime : '');

  return {
    command     : command,
    interval    : interval,
    scheduledTo : delay || undefined,
    time        : matching[1]
  };

}

function lower(str){
  return str.toLowerCase();
}

function parseDelay(input){
  var next = nextTime(input);
  return { input: input, date: next, shortDateTime: shortDateTime(next), delay: next - (new Date) };
}

function shortDateTime(date){
  return date.getMonth() + 1 +
    "." + date.getDate() +
    "." + date.getFullYear() +
    " " + date.getHours() +
    ":" + date.getMinutes();
}

function trim(str){
  return str.trim();
}
