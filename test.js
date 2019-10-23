const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const app = express();




  /*Ma rote sur localhost:8000/adot*/

app.get('/', function (req, res) {
  res.send(
  	/*Récupération du fichier .csv*/
	fs.createReadStream('events.csv')
	.pipe(csv())
	  .on('data', (row) => {
	    console.log(row);
	  })
	  .on('end', () => {
	    console.log('CSV file successfully processed');
	}))
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000')
})