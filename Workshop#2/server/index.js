const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
//middlewares
app.use(bodyParser.json());
app.use(cors({
  domains: '*',
  methods: "*"
}));

//routes
app.get('/tipocambio', function (req, res) {
  res.json({
    "TipoCompraDolares" : "621",
    "TipoVentaDolares" : "621",
    "TipoCompraEuros" : "731.85",
    "TipoVentaEuros" : "761.9"
  });
});

app.get('/countriesData', function (req, res){
  res.json({
    "Costa Rica":{"name":"Costa Rica","currency":"crc"},
    "Cyprus":{"name":"Cyprus","currency":"eur"},
    "Eritrea":{"name":"Eritrea","currency":"ern"},
    "Liberia":{"name":"Liberia","currency":"lbd"},
    "Bermuda":{"name":"Bermuda","currency":"bmd"},
    "Vatican City":{"name":"Vatican City","currency":"eur"},
    "Cook Islands":{"name":"Cook Islands","currency":"ckd"},
    "Somalía":{"name":"Somalía","currency":"sos"},
    "Zambia":{"name":"Zambia","currency":"zmw"},
    "Venezuela":{"name":"Venezuela","currency":"ves"},
    "Turkmenistan":{"name":"Turkmenistan","currency":"tmt"},
    "Albania":{"name":"Albania","currency":"all"},
    "Croatia":{"name":"Croatia","currency":"eur"},
    "United Kingdom":{"name":"United Kingdom","currency":"gbp"},
    "Sudan":{"name":"Sudan","currency":"sdg"},
    "Timor-Leste":{"name":"Timor-Leste","currency":"usd"},
    "Republic of the Congo":{"name":"Republic of the Congo","currency":"xaf"},
    "Azerbaijan":{"name":"Azerbaijan","currency":"azn"},
    "Kenya":{"name":"Kenya","currency":"kes"},
    "American Samoa":{"name":"American Samoa","currency":"usd"},
    "Ivory Coast":{"name":"Ivory Coast","currency":"xof"},
    "Senegal":{"name":"Senegal","currency":"xof"},
    "Vietnam":{"name":"Vietnam","currency":"vnd"}
  })
})
//start the app
app.listen(3001, () => console.log(`BBCR Exchange type service listening on port 3001!`))
