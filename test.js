const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const app = express();

const results = {};



/*Ma route sur localhost:8000*/
app.get('/', function (req, res) {
	res.send(

		/*Récupération du fichier .csv*/
		fs.createReadStream('events.csv')
		.pipe(csv())
		.on('data', data =>{ 

			// let indexName = data.lat + ',' + data.lon;
			// console.log(indexName);
			// if (results[indexName] !== undefined){
        	//    Récupérer le type d'évenement du data et vérifier si il est présent (oui: on incrémente; non: on ajoute la propriété avec une value = 1)
        	// console.log(data);
    		// }
    		// else{
            //    Ajouter la ligne formaté comme on le souhaite en set le type d'évenement à 1
        	// }
    	})
		.on('end', () => {
			console.log(results);
		})
	)	
});

app.post('/adot', function(req, res) {
	res.send(
		fs.createReadStream('events.csv')
		.pipe(csv())
		.on('data', data => {

			// arr = [lat= row.lat, lon= row.lon, event= row.event_type];
			// console.log(arr);
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


