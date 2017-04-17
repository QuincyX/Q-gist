var xlsx = require('node-xlsx').default;
var fs = require('fs');

fs.readdir(`./excel/`,(err, files)=>{
    if (err) throw err;
    let alldata = [];
    for(let i=0;i<files.length;i++){     
        let a = files[i];
        let thisfile = xlsx.parse(`./excel/`+files[i]);
        let data=thisfile[0].data;
        let newdata = {
            'name' : data[1][1],
            'gender' : data[1][3],
            'nation' : data[1][5],
            'birth' : data[2][1],
            'party' : data[2][3],
            'education' : data[3][1],
            'major' : data[3][3],
            'school' : data[4][1],
            'PQ' : data[4][5],
            'tel' : data[5][1],
            'mail' : data[5][5],
            'resume' : data[6][1],
            'record' : data[7][1],
            'special' : data[8][1],
            'words' : data[9][1]
        };
        fs.writeFile('./json/'+newdata.name+'.json',JSON.stringify(newdata),'utf-8',(err) => {
            if (err) throw err;
            console.log('It\'s saved!');
        });
        alldata.push(newdata);
    }
    fs.writeFile('./json/alldata.json',JSON.stringify(alldata),'utf-8',(err) => {
        if (err) throw err;
        console.log('It\'s saved!');
    });

});
