const express = require('express');
const app = express();

app.get('/' ,(req, res) =>{
    res.send('home page')
});

app.get('/users' , (req, res) => {
    res.send([
        {id: 1 , name: "Niloufar"},
        {id: 2 , name: "Armin"},
        {id: 3 , name: "Mohammad"},
    ]);
});

app.get('/users/:id/:name' ,(req, res) => {
    res.send({id: req.params.id , name: req.params.name})
})

const port = process.env.PORT || 3000;
app.listen(port , () => {console.log(`listening to port ${port}`)});