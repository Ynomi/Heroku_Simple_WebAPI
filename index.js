const express = require('express');
const app = express();

const ehimeData = require('./38EHIME.json');

app.set('port', (process.env.PORT || 3001));

app.get('/', (req, res) => {
    res.send(JSON.stringify(ehimeData[req.query.code], null, '\t'));    
});

app.listen(app.get('port'), () => {
    console.log("Node app is running at localhost:" + app.get('port'));
});