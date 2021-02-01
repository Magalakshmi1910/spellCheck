var fs = require('fs');
readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream(process.argv[2])
});

rd.on('line', function(line) {
  var wordArray = [];
  var misspelled = [];
  wordArray = line.split(/[\s,.]+/);

  fs.readFile('dictionary.txt','utf8',function(err,data){
    var count =  0;
     var dictionary = data.split(/\r?\n/);

     if (err) throw  err;
     for(var i=0;i<wordArray.length;i++)
     {
        if(dictionary.indexOf(wordArray[i].toLowerCase())<0){
          count++;
          misspelled.push(wordArray[i]);
        }
     }
     console.log(`MISSPELLED WORDS - ${count}`);
    for(var i=0;i<misspelled.length;i++){
      console.log(misspelled[i]);
    }

});


});
