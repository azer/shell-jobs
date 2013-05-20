var debug = require("debug")('read'),
    fs    = require('fs'),
    glob  = require('glob'),
    parse = require('./parse');

module.exports = read;

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

function read(args){
  return filterDuplicates(flatten(args.map(withGlob)))
    .map(readFile)
    .map(toString)
    .map(parse);
}

function readFile(filename){
  debug('Reading %s...', filename);
  return fs.readFileSync(filename);
}

function toString(str){
  return str.toString();
}

function withGlob(filename){
  return glob.sync(filename);
}
