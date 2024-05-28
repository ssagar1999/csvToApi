const express = require('express');
// const cors = require('cors');
const fs = require('fs');
const app = express();
// const d = require('./chitkara.csv')

const mongoose =  require('mongoose');



// app.use( )
app.use(express.json())

mongoose.connect('mongodb+srv://shu:shu@cluster0.3kifbax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.get('/', (req, res) =>{
    res.json({name:'shu', rollnum:897387})
})


app.get('/getCsvData', (req, res) =>{
    fs.readFile('chitkaras.csv', (err, data) =>{
        let s = data.toString().split('\r\n'); 
        s.splice(0,1);
        let d = s.map((d,i) =>{
        let p = d.split(',');
        return {name:p[0], email:p[1]}
        })
        res.json({allData : d})
    })

})
app.get('/convertCSVData', (req, res) =>{
    const csvFilePath='chitkaras.csv'
    const csv=require('csvtojson')

    csv({
        delimiter: ';'
      })
      .fromFile(csvFilePath)
      .then((jsonObj) => {
        res.json({data : jsonObj})
      });

})



app.get('/hh', (req, res) =>{
    let u  = 'oeroiwehohdoffksnfdf9803874yuhjrbdnksoiewukshdffskndkhfkshfkfhsdifysdf'
    let n= '';
    for(var i = 0; i<u.length; i++){
       console.log('hi')
    }
    for(var i = 0; i<u.length; i++){
        if(i == 56){

            res.send('chitkara')
        }
    }
})

app.get('/saveManyToDb', (req, res) =>{
    let arr = [{name:'kratos', rollno:75764763}, {name:'atreus', rollno:89792983}];

User.insertMany(arr).then(() => {
    console.log('saved');
    res.send('saved many  yo!')
});
   
})
  

app.listen(8000)