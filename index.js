var debug = require('debug')('jobs'),
    fs    = require('fs'),
    glob  = require('glob'),
    parse = require('./lib/parse'),
    exec  = require('./lib/exec');

module.exports = cli;

function cli(args){

  args = filterDuplicates(flatten(args.map(withGlob)));

  args
    .map(readFile)
    .map(toString)
    .forEach(jobs);
}

function filterDuplicates(files){
  return files.filter(function(el, ind){
    return files.indexOf(el) >= ind;
  });
}

function flatten(list){
  var result = [];

  list.forEach(function(el){
    result.push.apply(result, el);
  });

  return result;
}

function jobs(doc){
  parse(doc).map(start);
}

function withGlob(filename){
  return glob.sync(filename);
}

function readFile(filename){
  debug('Reading %s...', filename);
  return fs.readFileSync(filename);
}

function start(job){
  debug('Starting "%s" [%s]', job.command, job.time);
  setInterval(exec(job.command), job.interval);
}

function toString(str){
  return str.toString();
}
