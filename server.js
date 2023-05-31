const express = require('express');
const app = express();
const port = 3000;

app.get('/' ,(req, res)=>{
    res.sendFile(`${__dirname}/src/index.html`);
});

app.get(/(.*)\.(jpg|gif|png|css|js|txt)/i, (req, res)=>{
    res.sendFile(`${__dirname}/src${req.path}`);
})

app.listen(port, ()=>{
    console.log(`now running on port ${port}`); 
});

