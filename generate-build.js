let fs = require('fs');
console.log("Incrementing build number...");
fs.readFile('src/metadata.json',function(err,content){
    if(err) throw err;
    let metadata = JSON.parse(content);
    metadata.build = metadata.build + 1;
    fs.writeFile('src/metadata.json',JSON.stringify(metadata),function(err){
        if(err) throw err;
        console.log("Current build number: " + metadata.build);
    })
});