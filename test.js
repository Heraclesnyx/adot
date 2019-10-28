const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const app = express();




/*Ma route sur localhost:8000*/
app.get('/', function (req, res) {
	const results = {};

	// res.setHeader('Content-Type', 'application/json');
	res.send(


		/*Récupération du fichier .csv*/
		fs.createReadStream('events.csv')
		.pipe(csv())
		.on('data', data =>{ 

			let indexName = data.lat + ',' + data.lon;
			// console.log('toto');

            if (results[indexName] !== undefined){
                //  Récupérer le type d'évenement du data et vérifier si il est présent (oui: on incrémente; non: on ajoute la propriété avec une value = 1)
                if (results[indexName][data.event_type] !== undefined)
                    results[indexName][data.event_type]++;
                // console.log('toto_2');
                else
                    results[indexName][data.event_type] = 1;
                // console.log('toto_3');
            } else {
                let ad = {
                    lat: data.lat,
                    lon: data.lon
                }

                ad[data.event_type] = 1;

                //  Push into global object
                results[data.lat + '-' + data.lon] = results;
                // console.log(results);
                // console.log('toto_4');
            }
    	})
		.on('end', () => {
			console.log(results);
		})
	)
	// res.send(results);

});


app.listen(8000, function () {
  console.log('Example app listening on port 8000')
})


