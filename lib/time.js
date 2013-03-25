var minutes = x(seconds, 60),
    hours   = x(minutes, 60),
    days    = x(hours, 24),
    weeks   = x(days, 7);

module.exports = {
  seconds : seconds,
  second  : seconds,
  minute  : minutes,
  minutes : minutes,
  hour    : hours,
  hours   : hours,
  day     : days,
  days    : days,
  week    : weeks,
  weeks   : weeks
};

function seconds(n){
  return n * 1000;
}

function x(fn, multiples){
  return function(n){
    return fn(n) * multiples;
  }
}
