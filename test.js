const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const app = express();




/*Ma route sur localhost:8000*/
app.get('/', function (req, res) {

	var arr = {};
	res.send(
		

		/*Récupération du fichier .csv*/
		fs.createReadStream('events.csv')
		.pipe(csv())
		.on('data', (row) => {/*Boucle pour récupérer le fichier csv*/

			arr = {lat: row.lat, lon: row.lon, event: row.event_type};

			console.log(arr);

			// var separator = arr[i].split(' ');

			// 	console.log(separator);
			for(var i= 0; i< arr.length; i++){
				
				var old_arr= arr[i - 1];
				// 	old_arr[event];
				// console.log(arr[i]);
				// console.log(arr[2]);
				if(arr[i] == arr[0]  ||  arr[i] == arr[1] &&  arr[i]== old_arr || arr[i] == arr[2]){
					// var new_arr = arr[0].push(arr[i]);
					// var arry = arr.push(arr[i]);
					// arr[i] == arr[lat];
				// console.log(arr[0]);
				// console.log(arr[1]);
				// console.log(arr[2]);

				// // // 	console.log(row.lat);
				// // // 	console.log(row.lon);
				// // // 	// return arr[i] = arr;
					// console.log(row);
					
				}
				// return arr;
				// console.log(arr);
				// 	return arr.push(arr[event]);
				// }
				// console.log(arr[i]);
			}
			// return arr;
			
			// console.log(arr);
			// console.log(row);
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


