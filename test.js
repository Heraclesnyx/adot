const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const app = express();


function distance(lat1, lon1, lat2, lon2, unit = 'K') {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
        dist = 1;
    }
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist
}

// function sortProperties(obj)
// {
//     // convert object into array
//     var sortable=[];
//     for(var key in obj)
//         if(obj.hasOwnProperty(key))
//             sortable.push([key, obj[key]]); // each item is an array in format [key, value]

//     // sort items by value
//     sortable.sort(function(a, b)
//     {
//         return a[1]-b[1]; // compare numbers
//     });
//     return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
// }


/*Ma route sur localhost:8000*/
app.get('/', function (req, res) {

	let results = [];
		/*Récupération du fichier .csv*/
		fs.createReadStream('events.csv')
		.pipe(csv())
		.on('data', data =>{

			let result = results.push(data);

			//add imp and click
			// result.forEach(function(el) {
			// 	results[el.name] = {
			// 		lat: el.lat,
			// 		lon: el.lon,
			// 		name: el.name,
			// 		impressions: 0,
			// 		clicks: 0
			// 	}
			// });

			// let distances = {};

			// result.forEach(function(el) {
			// 	distances[el.name] = distance(data.lat, data.lon, el.lat, el.lon);
			// });

			// let sortedDistances = sortProperties(distances);
			// let event = data.event_type === 'imp' ? 'impressions' : 'clicks',
			// results[sortedDistances[0][0]][event]++;
    	})
		.on('end', () => {
			console.log(results);
			// res.send(results);
		})
	// )
	// res.send(results);

});


app.listen(8000, function () {
  console.log('Example app listening on port 8000')
})


