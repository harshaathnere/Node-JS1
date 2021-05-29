const path = require('path')
const  express = require('express');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));
const app = express();
const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory))
app.get('', (req, res)=> {
    res.send('<h1>Hello express</h1>')

})
app.get('/help',(req,res)=> {
    res.send([{
        name: 'harsha',
        age: 23
    }, {
        name: 'prateek'
    }])
})
app.get('/about',(req,res)=> {
    res.send('<h1>About page</h1>')
})
app.get('/weather',(req,res)=> {
    res.send([{
        weather: 'rainy',
        location: 'bhopal'
    }])
})
//app.com
//app.com/help
// app.com/about
app.listen(3000, () => {
    console.log(" Server is on port ")
})