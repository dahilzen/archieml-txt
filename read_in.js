/* eslint-disable no-undef */
/* eslint-disable no-console */
var archieml = require('archieml');
var fs = require('fs');

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}
// Read the file.
var filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  var parsed = archieml.load(data);
  // write output
  fs.writeFile('output.json', JSON.stringify(parsed), function(err) {
    if (err) throw err;
    console.log('complete');
  });
});
