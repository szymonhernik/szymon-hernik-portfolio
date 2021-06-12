const express = require('express')
const app = express()
const port = 8000
const path = require('path');
var sass = require('node-sass');
var sassMiddleware = require('node-sass-middleware');

app.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public'),
  debug: true,
  indentedSyntax: true
}));

const publicDirectory = path.join(__dirname, 'public');


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




app.use(express.static('public'))
