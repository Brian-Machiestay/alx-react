const express = require('express');
const path = require('path');

const app = express();
const filepath = path.resolve(__dirname, './public/index.html')
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(filepath);
})


app.listen(5000, () => {
    console.log('this app is listening on all interfaces at port 5000');
});
