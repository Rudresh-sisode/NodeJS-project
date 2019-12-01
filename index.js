var fs = require('fs');

fs.readFile('./first.txt', 'utf-8', (err, data) => {
  if(err) { throw err; }
  console.log('data: ', data);
});
