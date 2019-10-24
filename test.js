const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const app = express();




/*Ma route sur localhost:8000*/
app.get('/', function (req, res) {
	res.send(

		/*Récupération du fichier .csv*/
		fs.createReadStream('events.csv')
		.pipe(csv())
		.on('data', (row) => {

			var arr = {};
			arr = [lat= row.lat, lon= row.lon, event= row.event_type];

			// console.log(arr);

			for(var i= 0; i< arr.length; i++){

				// var old_arr= arr[i - 1];
				// 	old_arr[event];
				// console.log(arr[i]);
				// console.log(arr[2]);
				if(arr[i] == arr[0] || arr[i] == arr[1] || arr[i] == arr[2]){
					var new_arr = arr[2].push(arr[i]);
					// arr[2].push(arr[i]);
					// arr[i] == arr[lat];
				// console.log(arr[2]);
				// console.log(arr[1]);
				// console.log(arr[2]);

				// // // 	console.log(row.lat);
				// // // 	console.log(row.lon);
				// // // 	// return arr[i] = arr;
					console.log(new_arr);
					
				}
				// return arr;
				// console.log(arr);
				// 	return arr.push(arr[event]);
				// }
				// return arr;
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


