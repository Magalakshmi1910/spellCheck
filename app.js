var fs = require('fs');
readline = require('readline');

//check if user has entered the file name
if(process.argv.length !== 3)
{
  console.log("enter text file name as arguement");
  return 1;
}

//use readline to read the text file line by line 
var rd = readline.createInterface({
    input: fs.createReadStream(process.argv[2])
});

rd.on('line', function(line) {
  var wordArray = [];
  var misspelled = [];
  
  //line returns a single character. for example- "the" is returned as 't','h','e'
  //convert each character to word and push the words into array using split
  wordArray = line.split(/[\s,.]+/);
  
  //read dictionary file
  fs.readFile('dictionary.txt','utf8',function(err,data){
    var count =  0;
     var dictionary = data.split(/\r?\n/);

     if (err) throw  err;
    //loop through each words in the array to be checked for spelling
     for(var i=0;i<wordArray.length;i++)
     {
       //indexOf searches for an exact match and if not found returns -1
        if(dictionary.indexOf(wordArray[i].toLowerCase())<0){
          
          //count the misspelled words and psuh the words into a new array
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
