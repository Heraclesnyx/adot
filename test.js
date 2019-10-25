const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const app = express();




/*Ma route sur localhost:8000*/
app.get('/', function (req, res) {

	const results = {};
	res.send(
		

		/*Récupération du fichier .csv*/
		fs.createReadStream('events.csv') /*Boucle pour récupérer le fichier csv*/
		.pipe(csv()) /*Sans le pipe il ne récupère pas les donnée du csv on voit apparaitre Bluffer*/
		.on('data', data => {

			let indexName = data.lat + ',' + data.lon;
			// console.log(indexName);

			if(results[indexName] !== undefined ) {
				data.event_type++;
				console.log(data.event_type);
			}
			else{

			}
		})		
		.on('end', () => {
			console.log('CSV file successfully processed');
		})
	)

		
});

app.post('/adot', function(req, res) {
	res.send(
		fs.createReadStream('events.csv')
		.pipe(csv())
		.on('data', (row) => {

			var arr = [];
			arr = [lat= row.lat, lon= row.lon, event= row.event_type];
			console.log(arr);
			// console.log(row);
		})		
		// .on('end', () => {
		// 	console.log('CSV file successfully processed');
		// })
		)
		
	// );
	// return res.status(200).send(arrs);
		// return res.status(202).send('J\'envoie ma requête');
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000')
})


