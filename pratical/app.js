const http = require('http');
const fs = require('fs');
const cal = require('./calculation.js');

const textWrite = "Hello World !!! File System";
const textWriteAsync = "hello world !! async";

// Server creation
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`4 and 5 sum of = ${cal.add(4, 5)} <br/> 4 and 5 sub of = ${cal.sub(4, 5)}<br/> 4 and 5 multi of = ${cal.multi(4, 5)}<br/> 4 and 5 div of = ${cal.div(4, 5)}`);
});


// File creation and writing content
fs.writeFileSync('newfile_sync.txt', textWrite);
fs.writeFile('newfile_async.txt', textWriteAsync, (err) => {
    if (err) {
        console.error('Error occurred while adding content to newfile_async.txt:', err);
    } else {
        console.log('Content added to newfile_async.txt successfully.');
    }
});


//file folder
const Content = 'Hello World'
fs.mkdir('TEST',(err)=>{
    try {
        console.log('Folder is Created!!')
        for(i=0;i<3;i++){
            console.log(`File is Created !!! TEST/file${i+1}`)
            fs.writeFileSync(`TEST/file${i+1}`,`${Content}${i+1}`)
        }
    } catch (err) {
        console.log('error:',err)
    }
})
const Port = 4000;

// Server listening
server.listen(Port, () => {
    console.log('Server is running on ' + Port);
});

// Port number
