const fs=require('fs')

fs.mkdir('./files',()=>{});

fs.readFile('./test.txt','utf8',(error, data)=>{

    fs.writeFile('./files/test2.txt', `${data} new text` , (error)=>{
        error? console.log(error):null;
    });
});


setTimeout(()=>{
    if(fs.existsSync('./files/test2.txt')){
        fs.unlink('./files/test2.txt',()=>{});
    }
},4000);

setTimeout(()=>{
    if(fs.existsSync('./files')){
        fs.rmdir('./files',()=>{});
    }
},6000);
